/** Last-octet block math for CCNA-style /24–/30 visuals. */

export interface OctetSlice {
  start: number;
  end: number;
  index: number;
}

const SLICE_COLORS = [
  "border-sky-500/70 bg-sky-500/15",
  "border-emerald-500/70 bg-emerald-500/15",
  "border-amber-500/70 bg-amber-500/15",
  "border-violet-500/70 bg-violet-500/15",
  "border-rose-500/70 bg-rose-500/15",
  "border-cyan-500/70 bg-cyan-500/15",
  "border-lime-500/70 bg-lime-500/15",
  "border-orange-500/70 bg-orange-500/15",
] as const;

export function sliceColorClass(index: number): string {
  return SLICE_COLORS[index % SLICE_COLORS.length];
}

/** Block size in the changing (last) octet for /24–/30. */
export function blockSizeFromPrefix(prefix: number): number {
  const hostBits = 32 - prefix;
  if (hostBits <= 0) return 1;
  if (hostBits >= 8) return 256;
  return 2 ** hostBits;
}

export function slicesForPrefix(prefix: number): OctetSlice[] {
  const size = blockSizeFromPrefix(prefix);
  const slices: OctetSlice[] = [];
  for (let start = 0, index = 0; start < 256; start += size, index++) {
    slices.push({
      start,
      end: Math.min(start + size - 1, 255),
      index,
    });
  }
  return slices;
}

export function hostOctetFromIp(ip: string): number {
  const parts = ip.split(".");
  return Number.parseInt(parts[parts.length - 1] ?? "0", 10);
}

export function networkPrefixFromIp(ip: string): string {
  const parts = ip.split(".");
  if (parts.length !== 4) return ip;
  return `${parts[0]}.${parts[1]}.${parts[2]}`;
}

export function findSliceForHost(hostOctet: number, prefix: number): OctetSlice | undefined {
  return slicesForPrefix(prefix).find(
    (slice) => hostOctet >= slice.start && hostOctet <= slice.end
  );
}

/** When there are many slices, show four pick options (like exam MCQs). */
export function pickCandidateSlices(
  slices: OctetSlice[],
  correct: OctetSlice
): OctetSlice[] {
  if (slices.length <= 8) return slices;

  const others = slices.filter((s) => s.index !== correct.index);
  const before = [...others].reverse().find((s) => s.end < correct.start);
  const after = others.find((s) => s.start > correct.end);
  const far =
    others.find((s) => Math.abs(s.start - correct.start) > 64) ?? others[0];

  const raw = [correct, before, after, far].filter(
    (s): s is OctetSlice => s != null
  );
  const seen = new Set<number>();
  const unique: OctetSlice[] = [];
  for (const slice of raw) {
    if (!seen.has(slice.index)) {
      seen.add(slice.index);
      unique.push(slice);
    }
  }
  for (const slice of others) {
    if (unique.length >= 4) break;
    if (!seen.has(slice.index)) {
      seen.add(slice.index);
      unique.push(slice);
    }
  }
  return unique.sort((a, b) => a.start - b.start);
}

export const SUBNET_BLOCK_TABLE_ROWS = [
  { prefix: 24, total: 256, usable: 254 },
  { prefix: 25, total: 128, usable: 126 },
  { prefix: 26, total: 64, usable: 62 },
  { prefix: 27, total: 32, usable: 30 },
  { prefix: 28, total: 16, usable: 14 },
  { prefix: 29, total: 8, usable: 6 },
  { prefix: 30, total: 4, usable: 2 },
] as const;
