/** Rows for the wireless basics recall table (CCNA). */
export const WIRELESS_RECALL_TABLE_ROWS = [
  { item: "802.11", purpose: "Wireless LAN (Wi-Fi)" },
  { item: "802.3", purpose: "Wired Ethernet — not Wi-Fi" },
  { item: "SSID", purpose: "Network name clients see" },
  { item: "BSSID", purpose: "MAC of one AP radio" },
  { item: "1, 6, 11", purpose: "Non-overlapping 2.4 GHz channels" },
  { item: "WPA2 / WPA3", purpose: "Encryption (WEP is broken)" },
  { item: "Access point (AP)", purpose: "Bridges wireless ↔ wired LAN" },
  { item: "CSMA/CA", purpose: "Wireless collision avoidance" },
] as const;

/** Wi-Fi generation quick reference. */
export const WIFI_GENERATION_ROWS = [
  { standard: "802.11n", name: "Wi-Fi 4", band: "2.4 & 5 GHz" },
  { standard: "802.11ac", name: "Wi-Fi 5", band: "Primarily 5 GHz" },
  { standard: "802.11ax", name: "Wi-Fi 6", band: "2.4, 5 & 6 GHz" },
] as const;

/** 2.4 GHz channel dial — 5 MHz spacing, 20 MHz width per channel (CCNA model). */
export const WIFI_24_CHANNEL_DIAL = {
  channelWidth: 20,
  channelSpacing: 5,
  nonOverlapping: [1, 6, 11] as const,
  overlapExample: 3,
  maxChannel: 11,
} as const;

/** Left edge position on the dial scale (arbitrary units). */
export function wifiChannelLeft(channel: number): number {
  return (channel - 1) * WIFI_24_CHANNEL_DIAL.channelSpacing;
}

export function wifiDialTotalWidth(): number {
  const { channelSpacing, channelWidth, maxChannel } = WIFI_24_CHANNEL_DIAL;
  return (maxChannel - 1) * channelSpacing + channelWidth;
}
