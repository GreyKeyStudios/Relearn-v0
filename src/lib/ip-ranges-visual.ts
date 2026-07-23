/** Rows for the IP ranges recall table (CCNA special-use blocks). */
export const IP_RANGES_TABLE_ROWS = [
  {
    range: "10/8, 172.16/12, 192.168/16",
    purpose: "Private RFC 1918",
  },
  {
    range: "127.0.0.0/8",
    purpose: "Loopback",
  },
  {
    range: "169.254.0.0/16",
    purpose: "APIPA",
  },
  {
    range: "224.0.0.0/4",
    purpose: "Multicast",
  },
  {
    range: "192.0.2/24, 198.51.100/24, 203.0.113/24",
    purpose: "TEST-NET docs",
  },
] as const;
