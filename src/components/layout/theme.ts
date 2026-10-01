export type Theme = "light" | "dark" | "system";

export const THEME_STORAGE_KEY = "relearn:theme";

/**
 * Runs before first paint, inlined into <head>, so the page never renders in
 * the wrong theme and then snaps. Kept dependency-free and defensive: a
 * private window or blocked site data must not throw and leave the app blank.
 */
export const THEME_INIT_SCRIPT = `(function(){try{
var stored=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
var theme=stored==="light"||stored==="dark"?stored:(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
if(theme==="dark")document.documentElement.classList.add("dark");
}catch(e){}})();`;

export function resolveTheme(theme: Theme): "light" | "dark" {
  if (theme !== "system") return theme;
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", resolveTheme(theme) === "dark");
}

export function readStoredTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") return stored;
  } catch {
    /* Blocked site data must not break rendering; fall through to system. */
  }
  return "system";
}

export function storeTheme(theme: Theme) {
  try {
    if (theme === "system") localStorage.removeItem(THEME_STORAGE_KEY);
    else localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* A theme choice that cannot persist is still applied for this session. */
  }
}

/*
  The stored theme lives outside React, so it is exposed as an external store
  rather than copied into state inside an effect. getSnapshot must return a
  cached value or useSyncExternalStore will loop.
*/
const listeners = new Set<() => void>();
let snapshot: Theme | null = null;

export function subscribeTheme(onChange: () => void) {
  listeners.add(onChange);
  // While on "system", follow the OS if it changes mid-session.
  const query = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = () => {
    if (getThemeSnapshot() === "system") applyTheme("system");
  };
  query.addEventListener("change", onSystemChange);
  return () => {
    listeners.delete(onChange);
    query.removeEventListener("change", onSystemChange);
  };
}

export function getThemeSnapshot(): Theme {
  if (snapshot === null) snapshot = readStoredTheme();
  return snapshot;
}

/* No storage on the server; "system" is what the inline script assumes too. */
export function getServerThemeSnapshot(): Theme {
  return "system";
}

export function setTheme(theme: Theme) {
  snapshot = theme;
  storeTheme(theme);
  applyTheme(theme);
  listeners.forEach((listener) => listener());
}
