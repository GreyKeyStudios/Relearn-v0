/** Rows for the IPv6 address-types recall table (CCNA basics). */
export const IPV6_TYPES_TABLE_ROWS = [
  { range: "2000::/3", purpose: "Global unicast (Internet)" },
  { range: "fe80::/10", purpose: "Link-local (this link only)" },
  { range: "fc00::/7", purpose: "Unique local (private-like)" },
  { range: "ff00::/8", purpose: "Multicast (no broadcast)" },
  { range: "::1", purpose: "Loopback" },
] as const;

/** IPv4 ↔ IPv6 role comparison (Professor Mode curriculum note). */
export const IPV4_IPV6_COMPARE_ROWS = [
  { ipv4: "Public / global", ipv6: "Global unicast (2000::/3)" },
  { ipv4: "Private (RFC 1918)", ipv6: "Unique local (fc00::/7)" },
  { ipv4: "APIPA (169.254.x.x)", ipv6: "Link-local (fe80::/10)" },
  { ipv4: "Multicast (224.x)", ipv6: "Multicast (ff00::/8)" },
  { ipv4: "Loopback (127.0.0.1)", ipv6: "Loopback (::1)" },
] as const;

/** Example address for /64 prefix visual. */
export const IPV6_PREFIX_EXAMPLE = {
  full: "2001:db8:abcd:1234:5678:9abc:def0:1111",
  networkHextets: ["2001", "db8", "abcd", "1234"],
  hostHextets: ["5678", "9abc", "def0", "1111"],
  prefix: 64,
} as const;

/** Leading-zero compression examples. */
export const IPV6_LEADING_ZERO_EXAMPLES = [
  { before: "000A", after: "A" },
  { before: "00AF", after: "AF" },
  { before: "0db8", after: "db8" },
  { before: "0000", after: "0" },
] as const;
