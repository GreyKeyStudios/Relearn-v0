# CCNA Subnetting — Full Lesson + Quiz Walkthrough (for ChatGPT review)

**How to use this doc:** Read cards in order, as a novice student would. At each **CHECKPOINT**, stop and answer the multiple-choice question using only what you have learned so far. After answering, note:
- Were you ready for this question?
- Was any term or concept used before it was taught?
- Is the wording clear?

**Prerequisite (IPv4 addressing lesson):** Students already know 32 bits, four octets, network vs host portions, /24 = 255.255.255.0, up to 256 host values in last octet. They have NOT yet been taught network address, broadcast address, block size, borrowing, or VLSM in depth.

---

## PART 1 — Lesson flow (39 cards + 5 in-lesson checkpoints)

---

### Card 1 · `intro-why` [hero]
**Headline:** Why subnet a network?

**Body:** One large IP network can waste addresses and create one big broadcast domain. Subnetting splits it into smaller pieces so each department or site gets its own range with the right size.

**Term popover — Subnet:** A smaller subdivision of an IP network — devices in the same subnet share a network portion.

---

### Card 2 · `intro-bridge` [teach]
**Headline:** Subnetting builds on IPv4.

**Body:** In IPv4 addressing you learned network vs host portions, /24 masks, and why 255.255.255.0 looks that way. Subnetting uses those ideas to divide one network into many smaller subnets — each with its own address range.

**Term popovers:**
- **Subnet mask:** Shows where the network portion ends and the host portion begins — e.g. /24 or 255.255.255.0.
- **CIDR:** Classless Inter-Domain Routing — prefix notation like /24 instead of old classful-only sizing.

---

### Card 3 · `prefix-what` [teach]
**Headline:** What is a prefix?

**Body:** The prefix is the slash number in CIDR notation — /24, /26, /28. It counts how many of the 32 bits in an IPv4 address belong to the network portion. A larger prefix means a longer network portion and fewer host bits left for devices.

**Term popover — Prefix:** The slash number — how many bits identify the network. /24 = 24 network bits, 8 host bits.

---

### Card 4 · `recall-network-host` [teach]
**Headline:** Recall: network vs host.

**Body:** In 192.168.1.10/24, the first three octets (192.168.1) are locked as the network portion — every device on this subnet shares them. Only the last octet (.10) is the host portion and can change per device. When you subnet, you borrow bits from the host portion — the network portion grows, the host portion shrinks.

**Visual:** `192.168.1.x network` → `.10 host`

---

### Card 5 · `changing-octet` [teach]
**Headline:** The changing octet.

**Body:** For CCNA-style /24 through /30 problems, the first three octets stay fixed and all the subnet math happens in the last octet (0–255). That last octet is the changing octet — block sizes, boundaries, and host ranges all live there.

**Study tip — Where to look:** 192.168.1.90/26 → ignore 192.168.1 for now. Focus on 90 and which chunk of 0–255 it falls in.

---

### Card 6 · `binary-intro` [teach]
**Headline:** Binary explains why.

**Body:** Subnetting makes sense once you see how masks mark network vs host bits in binary — and why block sizes follow powers of 2. You can memorize a cheat table, but binary is what makes the table stick and keeps you job-ready when masks change.

**Term popover — Bit:** The smallest unit of data — either 1 or 0. Thirty-two bits make one IPv4 address.

---

### Card 7 · `binary-octet` [teach]
**Headline:** Why octets go 0–255.

**Body:** One octet is 8 bits — 2^8 = 256 possible values (0 through 255). That is why a /24 has 256 addresses in the changing octet: 8 host bits → 2^8 = 256. It is also why 255 in a mask means all 8 bits in that octet are network bits.

---

### Card 8 · `host-bits` [teach]
**Headline:** Host bits = why 2^n works.

**Body:** Host bits = 32 − prefix. A /26 has 6 host bits → 2^6 = 64 addresses in that subnet. The ^ means "to the power of" — 2^6 is 64, not 12. Every combination of those 6 bits is one address in the block.

**Term popover — Host bits:** Bits left for devices — 32 minus prefix. Block size = 2^host_bits.

---

### Card 9 · `binary-mask` [teach]
**Headline:** Ones and zeros in the mask.

**Body:** Network bits are 1s, host bits are 0s. A /24 mask ends 255.255.255.0 — the last octet is all 0s (8 host bits). A /26 borrows 2 host bits, leaving 6 → the last octet becomes 11000000 in binary = 192 decimal. So /26 mask = 255.255.255.192.

**Study tip — How to read .192:** /24 → 8 host bits → mask octet 0. Borrow 2 → 6 host bits → two more 1s → 11000000 = 192.

---

### Card 10 · `block-size` [teach]
**Headline:** Block size and the 256 shortcut.

**Body:** Block size is how many addresses fit in one subnet — and the step you count by in the changing octet. From binary: 2^host_bits. From the mask: 256 − mask octet value. Example: /26 ends in .192 → 256 − 192 = 64. Block size 64 means subnets start every 64 addresses.

**Term popover — Block size:** Addresses per subnet in the changing octet — from 2^host_bits or 256 − mask octet.

---

### Card 11 · `slash24-largest` [teach]
**Headline:** /24 is the whole pie.

**Body:** In one octet, /24 is the largest subnet — all 256 addresses (0–255) in a single block. Every time the prefix goes up by 1, you cut that pie in half: /25 = 128, /26 = 64, /27 = 32, and so on. The numbers always add up to 256 — you are just dividing the same octet into smaller slices.

**Visual:** `/24 = 256 (whole octet)` → `/25 = 128 + 128` → `/26 = 64 × 4`

---

### Card 12 · `block-halving` [teach]
**Headline:** The halving rule.

**Body:** /24 means 256 total addresses in the changing octet. Every time the slash number goes up by 1, the subnet size gets cut in half — because one more host bit moved to the network side. Memorize this pattern before anything else.

**Study tip — Halving rule:** /24=256 · /25=128 · /26=64 · /27=32 · /28=16 · /29=8 · /30=4. Each +1 on the slash halves available addresses.

---

### Card 13 · `network-addr` [teach]
**Headline:** Network address.

**Body:** The network address is the lowest address in a subnet — the start of the block. All host bits are 0 here. You cannot assign it to a PC. Example: in 192.168.1.64/26, the network is 192.168.1.64.

**Term popover — Network address:** Start of the block — lowest address in the subnet. Identifies the subnet, not a device.

---

### Card 14 · `broadcast-addr` [teach]
**Headline:** Broadcast address.

**Body:** The broadcast address is the highest address in the block — one below where the next subnet would start. All host bits are 1 here. Traffic sent to it reaches every device on that subnet. You cannot assign it to a PC.

**Term popover — Broadcast address:** End of the block — one address below the next boundary. Means "everyone on this LAN."

---

### Card 15 · `usable-range` [teach]
**Headline:** First and last usable hosts.

**Body:** Usable hosts sit between network and broadcast — the addresses you can actually assign to devices. In 192.168.1.64/26: network .64 (reserved), first host .65, last host .126, broadcast .127 (reserved).

**Visual:** `.64 network` → `.65 – .126 hosts` → `.127 broadcast`

---

### Card 16 · `total-vs-usable` [misconception]
**Headline:** Total vs usable addresses.

**Body:** Block size is the total addresses in a subnet. Usable hosts = total − 2, because network and broadcast are reserved and unassignable. A /28 has block size 16 → 14 usable hosts. Exam questions may ask for total or assignable — read carefully.

---

### ⛔ CHECKPOINT 1 · `total-check` — Question `subnetting-q4`

**Card headline:** Quick check — /28 total

**Prompt:** A /28 subnet has how many total IP addresses?

- a) 8
- b) 16
- c) 32
- d) 64

**Correct answer:** b) 16

**Explanation (shown after answer):** /28 has 4 host bits: 2^4 = 16 total addresses.

**Difficulty:** easy · **Objective:** CCNA-1.10

---

### Card 18 · `block-table` [teach]
**Headline:** Block-size cheat table.

**Body:** Look up the prefix, get the block size (total addresses). Subtract 2 for usable hosts. Skip /31 and /32 until later. All values are divisions of 256 in the changing octet.

**Study tip — Memorize this:** /24→256 (254 usable) · /25→128 (126) · /26→64 (62) · /27→32 (30) · /28→16 (14) · /29→8 (6) · /30→4 (2).

---

### Card 19 · `block-first-rule` [hero]
**Headline:** Find the block first.

**Body:** Do not jump to network or broadcast first. Find which block the IP lives in — the range of addresses in the changing octet — then network, broadcast, and usable hosts fall out automatically.

---

### Card 20 · `cheat-order` [teach]
**Headline:** Subnetting order — every time.

**Body:** 1) Read the prefix → block size from table · 2) List block ranges in the changing octet (count by block size) · 3) Which block contains the IP? · 4) Network = start of that block · 5) Broadcast = one before next block start · 6) First host = network + 1 · 7) Last host = broadcast − 1.

**Study tip — Killer question:** Which block does this IP live in? — not "what's the broadcast?" first.

---

### ⛔ CHECKPOINT 2 · `network-check` — Question `subnetting-q5`

**Card headline:** Quick check — network address

**Prompt:** The network address always has host bits set to:

- a) All 1s
- b) All 0s
- c) Alternating
- d) Random

**Correct answer:** b) All 0s

**Explanation:** The network address is the lowest address with all host bits as 0.

**Difficulty:** easy · **Objective:** CCNA-1.9

---

### Card 22 · `which-block-worked` [teach]
**Headline:** Worked example: 192.168.1.90/26.

**Body:** Step 1: /26 → block size 64. Step 2: List ranges in the last octet — 0–63, 64–127, 128–191, 192–255 (four blocks of 64 = 256 total). Step 3: 90 falls in 64–127. Step 4: Network = 192.168.1.64 · first host .65 · last host .126 · broadcast .127.

**Visual:** `/26 = 64` → `90 in 64–127` → `net .64 bcast .127`

---

### Card 23 · `worked-45-27` [teach]
**Headline:** Worked example: 192.168.1.45/27.

**Body:** Step 1: /27 → block size 32. Step 2: Ranges — 0–31, 32–63, 64–95, 96–127… (eight blocks of 32 = 256). Step 3: 45 is in 32–63. Step 4: Network 192.168.1.32 · broadcast .63 · usable hosts .33–.62.

---

### Card 24 · `worked-200-28` [teach]
**Headline:** Worked example: 192.168.1.200/28.

**Body:** Step 1: /28 → block size 16. Step 2: Near 200, check 192–207 and 208–223 (sixteen addresses each). Step 3: 200 is in 192–207. Step 4: Network 192.168.1.192 · broadcast .207 · usable hosts .193–.206.

**Study tip — Do not mix problems:** /28 blocks are chunks of 16 — not a whole /24. Lock in the prefix before you look at the IP.

---

### ⛔ CHECKPOINT 3 · `hosts-check` — Question `subnetting-q1`

**Card headline:** Quick check — /26 hosts

**Prompt:** How many usable host addresses in a /26 subnet?

- a) 30
- b) 62
- c) 126
- d) 254

**Correct answer:** b) 62

**Explanation:** /26 leaves 6 host bits: 2^6 - 2 = 62 usable addresses.

**Difficulty:** easy · **Objective:** CCNA-1.9

---

### Card 26 · `borrow-intro` [teach]
**Headline:** Why borrowing works.

**Body:** To split one network into smaller subnets, bits move from the host portion to the network portion. Each bit borrowed doubles the subnet count and halves the block size. You are not adding addresses — you are re-dividing the same 256-address octet.

**Term popover — Borrowing bits:** Take host bits and use them as network bits to create additional subnets from one block.

---

### Card 27 · `borrow-prefix-grow` [teach]
**Headline:** Why /24 becomes /26.

**Body:** A /24 has 24 network bits and 8 host bits. Need four subnets? Borrow 2 host bits → 2^2 = 4 subnets. New prefix: 24 + 2 = 26. The slash number grows because the network portion got longer and the host portion got shorter.

**Visual:** `/24 = 24 net bits` → `Borrow 2` → `/26 = 26 net bits`

---

### Card 28 · `borrow-four-subnets` [teach]
**Headline:** Splitting a /24 into four subnets.

**Body:** Need 2 subnets from a /24? → /25 (blocks of 128). Need 4? → /26 (blocks of 64). Need 8? → /27. Need 16? → /28. Example — four equal /26 subnets from 192.168.1.0/24: 192.168.1.0/26 (.0–.63), 192.168.1.64/26 (.64–.127), 192.168.1.128/26 (.128–.191), 192.168.1.192/26 (.192–.255).

**Study tip — Subnet count:** 2 subnets=/25 · 4=/26 · 8=/27 · 16=/28. More subnets = smaller blocks = higher slash number.

---

### Card 29 · `boundaries` [teach]
**Headline:** Subnet boundaries.

**Body:** Block size tells you both how many addresses each subnet holds and how far apart subnet starts are. Block size 64 → valid network addresses start at .0, .64, .128, .192 — only multiples of 64. .50 is a host inside 0–63, not a valid subnet start.

**Study tip — One /26 chunk:** .0 network · .1–.62 usable · .63 broadcast · .64 = next subnet. Broadcast is always one below the next boundary.

**Visual icons:** `.0` · `.64` · `.128` · `.192`

---

### Card 30 · `anchor-jumps` [teach]
**Headline:** Anchor jumps — skip long counting.

**Body:** For /28 (block 16), do not count 0, 16, 32… all the way to 240 every time. Jump to anchors 0, 64, 128, 192 — these divide 256 into four groups — then count by 16 only inside the group your IP falls in.

**Study tip — /28 anchor groups:** 0–63 → 0 group · 64–127 → 64 group · 128–191 → 128 group · 192–255 → 192 group. Then +16 inside that group only.

---

### Card 31 · `nearest-multiple` [teach]
**Headline:** Nearest lower multiple.

**Body:** To find the network address, ask: what is the largest block start at or below this IP? That is the nearest lower multiple of the block size. For 200/28 (block 16): 192 is below 200, next start is 208, so network .192 and broadcast .207. For 130/29 (block 8): nearest lower multiple of 8 is 128; broadcast 135.

**Study tip — Quick examples:** 45/27 → nearest 32 · 90/26 → nearest 64 · 200/28 → nearest 192 · 130/29 → nearest 128.

---

### Card 32 · `block-range-drill` [teach]
**Headline:** Drill: block range only.

**Body:** Before full answers, train IP → block range. Find the prefix, get block size, locate the range. 73/28 → 64–79 · 155/28 → 144–159 · 201/28 → 192–207 · 37/29 → 32–39 · 222/27 → 192–223. Once the range is locked, network = range start and broadcast = range end.

---

### ⛔ CHECKPOINT 4 · `broadcast-check` — Question `subnetting-q2`

**Card headline:** Quick check — broadcast

**Prompt:** What is the broadcast address for 192.168.10.0/24?

- a) 192.168.10.0
- b) 192.168.10.1
- c) 192.168.10.254
- d) 192.168.10.255

**Correct answer:** d) 192.168.10.255

**Explanation:** In a /24, the last address .255 is the broadcast.

**Difficulty:** easy · **Objective:** CCNA-1.10

---

### Card 34 · `vlsm-what` [teach]
**Headline:** What is VLSM?

**Body:** Variable Length Subnet Masking means using different prefix lengths inside one parent address block — a /24 for a big department, a /26 for a smaller one, a /30 for a WAN link. Allocate biggest need first, no overlap, and each new subnet starts at the next free boundary.

**Term popover — VLSM:** Variable Length Subnet Mask — mix /24, /26, /30 inside one allocation.

---

### Card 35 · `vlsm-not-same` [misconception]
**Headline:** VLSM is not one address, many masks.

**Body:** Wrong: same network address with different prefixes on different devices. Right: chop a parent block into separate slices — each slice has its own network address, prefix, and address range. No two slices overlap.

---

### Card 36 · `vlsm-example` [teach]
**Headline:** VLSM walkthrough.

**Body:** Parent block: 192.168.0.0/22 (covers 192.168.0.0–192.168.3.255). Step 1 — Sales needs 200 hosts → /24 fits → 192.168.0.0/24 (.0.0–.0.255). Step 2 — IT needs 50 hosts → /26 fits → 192.168.1.0/26 (.1.0–.1.63). Step 3 — WAN needs 2 hosts → /30 fits → 192.168.1.64/30 (.1.64–.1.67). Each slice starts where the last one ended.

**Visual:** `/22 parent` → `/24 Sales` → `/26 IT` → `/30 WAN`

---

### ⛔ CHECKPOINT 5 · `vlsm-check` — Question `subnetting-q3`

**Card headline:** Quick check — VLSM

**Prompt:** VLSM allows:

- a) Only one mask size per network
- b) Different subnet mask lengths in the same design
- c) IPv6 only
- d) Automatic DHCP assignment

**Correct answer:** b) Different subnet mask lengths in the same design

**Explanation:** Variable Length Subnet Masks enable efficient use of address space with mixed prefix lengths.

**Difficulty:** easy · **Objective:** CCNA-1.9

---

### Card 38 · `exam-strategy` [teach]
**Headline:** Exam strategy.

**Body:** Prefix → block size → which block? → network → broadcast → hosts. Write the block range before anything else. Double-check you did not mix two problems (common on /28). Remember: broadcast is the last address in the range, not the last usable host.

**Study tip — Practice:** Subnet CIDR simulator after this lesson. Packet Tracer lab after the getting-started guide.

---

### Card 39 · `summary` [summary]
**Headline:** Subnetting fundamentals covered.

**Body:** Binary shows why block sizes work. /24 is the whole octet; halving divides 256. Find the block first, then network, broadcast, and usable hosts. Borrowing splits the pie; VLSM sizes slices to fit each need.

---

## PART 2 — Post-lesson topic quiz (appears after lesson completes)

These 5 questions appear in the topic quiz UI in this order (NOT the same order as in-lesson checkpoints):

### Topic quiz 1 · `subnetting-q1`
**Prompt:** How many usable host addresses in a /26 subnet?
- a) 30 · **b) 62** · c) 126 · d) 254
**Explanation:** /26 leaves 6 host bits: 2^6 - 2 = 62 usable addresses.

### Topic quiz 2 · `subnetting-q2`
**Prompt:** What is the broadcast address for 192.168.10.0/24?
- a) 192.168.10.0 · b) 192.168.10.1 · c) 192.168.10.254 · **d) 192.168.10.255**
**Explanation:** In a /24, the last address .255 is the broadcast.

### Topic quiz 3 · `subnetting-q3`
**Prompt:** VLSM allows:
- a) Only one mask size per network · **b) Different subnet mask lengths in the same design** · c) IPv6 only · d) Automatic DHCP assignment
**Explanation:** Variable Length Subnet Masks enable efficient use of address space with mixed prefix lengths.

### Topic quiz 4 · `subnetting-q4`
**Prompt:** A /28 subnet has how many total IP addresses?
- a) 8 · **b) 16** · c) 32 · d) 64
**Explanation:** /28 has 4 host bits: 2^4 = 16 total addresses.

### Topic quiz 5 · `subnetting-q5`
**Prompt:** The network address always has host bits set to:
- a) All 1s · **b) All 0s** · c) Alternating · d) Random
**Explanation:** The network address is the lowest address with all host bits as 0.

---

## PART 3 — Question bank (40 practice questions, not in lesson)

Answer each as if you finished the lesson. Note if any question requires knowledge not covered in the lesson cards.

### b1 · medium
**Prompt:** 192.168.1.0/26 network address of 3rd subnet?
- **a) 192.168.1.128** · b) 192.168.1.64 · c) 192.168.1.192 · d) 192.168.1.0
**Explanation:** Subnets: .0, .64, .128, .192 — third is .128.

### b2 · medium
**Prompt:** How many /28 subnets in a /24?
- **a) 16** · b) 8 · c) 4 · d) 32
**Explanation:** Borrow 4 bits → 2^4 = 16 subnets.

### b3 · hard
**Prompt:** First usable host in 10.1.1.0/30?
- a) 10.1.1.0 · **b) 10.1.1.1** · c) 10.1.1.2 · d) 10.1.1.3
**Explanation:** .0 is network; .1 is first usable.

### b4 · hard
**Prompt:** VLSM stands for:
- a) Virtual LAN Subnet Mask · **b) Variable Length Subnet Mask** · c) Verified Link State Mask · d) Vector Link Subnet Method
**Explanation:** VLSM uses different prefix lengths in one design.

### b5 · hard
**Prompt:** Broadcast of 172.16.4.0/22?
- **a) 172.16.7.255** · b) 172.16.4.255 · c) 172.16.3.255 · d) 172.16.4.0
**Explanation:** /22 spans third octet blocks of 4: 172.16.4.0–172.16.7.255.

### b6 · hard
**Prompt:** Minimum subnet for 2 usable hosts (traditional)?
- **a) /30** · b) /24 · c) /16 · d) /8
**Explanation:** /30 provides 2 usable host addresses.

### b7 · hard
**Prompt:** How many usable hosts in a /27 subnet?
- **a) 30** · b) 32 · c) 62 · d) 126
**Explanation:** /27 leaves 5 host bits: 2^5 - 2 = 30 usable addresses.

### b8 · hard
**Prompt:** Which mask corresponds to a /25 prefix?
- **a) 255.255.255.128** · b) 255.255.255.192 · c) 255.255.255.224 · d) 255.255.255.0
**Explanation:** /25 borrows 1 bit from the fourth octet: 128 decimal = 255.255.255.128.

### b9 · medium
**Prompt:** What is the network address for the host 192.168.10.45/29?
- a) 192.168.10.32 · **b) 192.168.10.40** · c) 192.168.10.48 · d) 192.168.10.0
**Explanation:** /29 has a block size of 8. Subnets: .0, .8, .16, .24, .32, .40, .48... The host .45 falls in the .40 block.

### b10 · medium
**Prompt:** What is the broadcast address for 192.168.10.40/29?
- **a) 192.168.10.47** · b) 192.168.10.48 · c) 192.168.10.46 · d) 192.168.10.255
**Explanation:** /29 block size is 8. Starting at .40, the subnet range is .40–.47. The last address (.47) is the broadcast.

### b11 · medium
**Prompt:** What is the first usable host address in the 192.168.10.40/29 subnet?
- a) 192.168.10.39 · b) 192.168.10.40 · **c) 192.168.10.41** · d) 192.168.10.42
**Explanation:** The network address is .40 (reserved). The first usable host is .41.

### b12 · easy
**Prompt:** How many usable host addresses exist in a /29 subnet?
- a) 4 · **b) 6** · c) 8 · d) 14
**Explanation:** /29 leaves 3 host bits: 2^3 = 8 total addresses minus network and broadcast = 6 usable hosts.

### b13 · easy
**Prompt:** What subnet mask in dotted decimal corresponds to a /29 prefix?
- a) 255.255.255.240 · **b) 255.255.255.248** · c) 255.255.255.252 · d) 255.255.255.224
**Explanation:** /29 has 29 network bits. The last octet has 5 bits set: 11111000 = 248.

### b14 · medium
**Prompt:** What is the network address for the host 10.0.0.130/27?
- a) 10.0.0.96 · **b) 10.0.0.128** · c) 10.0.0.160 · d) 10.0.0.0
**Explanation:** /27 has a block size of 32. Subnets in the last octet: .0, .32, .64, .96, .128, .160... The host .130 falls in the .128 block.

### b15 · medium
**Prompt:** What is the broadcast address for 10.0.0.128/27?
- **a) 10.0.0.159** · b) 10.0.0.160 · c) 10.0.0.255 · d) 10.0.0.158
**Explanation:** /27 block size is 32. The subnet .128 spans .128–.159. Broadcast is .159.

### b16 · medium
**Prompt:** How many /27 subnets can be created from a single /24 network?
- a) 4 · **b) 8** · c) 16 · d) 32
**Explanation:** Moving from /24 to /27 borrows 3 bits: 2^3 = 8 subnets.

### b17 · medium
**Prompt:** How many usable host addresses are in a /23 subnet?
- a) 254 · **b) 510** · c) 512 · d) 1022
**Explanation:** /23 leaves 9 host bits: 2^9 = 512 total minus 2 = 510 usable hosts.

### b18 · hard
**Prompt:** What is the network address for host 172.16.20.100/23?
- **a) 172.16.20.0** · b) 172.16.21.0 · c) 172.16.22.0 · d) 172.16.18.0
**Explanation:** /23 in the third octet has a block size of 2. Even-numbered blocks: .20.x, .22.x, .24.x.

### b19 · hard
**Prompt:** What is the broadcast address for 172.16.20.0/23?
- a) 172.16.20.255 · b) 172.16.21.254 · **c) 172.16.21.255** · d) 172.16.22.0
**Explanation:** /23 spans two consecutive /24 blocks. 172.16.20.0/23 covers 172.16.20.0 through 172.16.21.255.

### b20 · easy
**Prompt:** What is the dotted-decimal subnet mask for a /23 prefix?
- **a) 255.255.254.0** · b) 255.255.252.0 · c) 255.255.255.0 · d) 255.255.248.0
**Explanation:** /23 has 23 network bits. The third octet has 7 bits set: 11111110 = 254.

### b21 · medium
**Prompt:** In VLSM design, what is the smallest subnet that accommodates exactly 50 hosts?
- a) /24 — 254 usable · **b) /26 — 62 usable** · c) /27 — 30 usable · d) /25 — 126 usable
**Explanation:** /27 gives only 30 usable hosts — too small. /26 gives 62 usable hosts.

### b22 · medium
**Prompt:** How many usable host addresses are in a /22 subnet?
- a) 510 · **b) 1022** · c) 1024 · d) 2046
**Explanation:** /22 leaves 10 host bits: 2^10 = 1024 total minus 2 = 1022 usable hosts.

### b23 · hard
**Prompt:** What is the network address for host 10.1.4.50/22?
- a) 10.1.0.0 · **b) 10.1.4.0** · c) 10.1.5.0 · d) 10.1.3.0
**Explanation:** /22 block size in the third octet is 4. Blocks: .0.x, .4.x, .8.x...

### b24 · hard
**Prompt:** What is the broadcast address for 10.1.4.0/22?
- a) 10.1.4.255 · b) 10.1.5.255 · **c) 10.1.7.255** · d) 10.1.6.255
**Explanation:** /22 spans 4 consecutive /24 blocks. 10.1.4.0/22 covers 10.1.4.0 through 10.1.7.255.

### b25 · easy
**Prompt:** What is the dotted-decimal mask for a /28 prefix?
- a) 255.255.255.224 · **b) 255.255.255.240** · c) 255.255.255.248 · d) 255.255.255.252
**Explanation:** /28 has 28 network bits. The fourth octet has 4 bits set: 11110000 = 240.

### b26 · easy
**Prompt:** How many usable host addresses are in a /28 subnet?
- **a) 14** · b) 16 · c) 30 · d) 6
**Explanation:** /28 leaves 4 host bits: 2^4 = 16 total minus 2 = 14 usable hosts.

### b27 · medium
**Prompt:** What is the network address for host 192.168.100.200/28?
- **a) 192.168.100.192** · b) 192.168.100.208 · c) 192.168.100.196 · d) 192.168.100.176
**Explanation:** /28 block size is 16. Subnets in the last octet: .0, .16, .32... .176, .192, .208. Host .200 falls in the .192 block.

### b28 · medium
**Prompt:** What is the broadcast address for 192.168.100.192/28?
- a) 192.168.100.200 · **b) 192.168.100.207** · c) 192.168.100.208 · d) 192.168.100.255
**Explanation:** /28 block size is 16. The .192 subnet spans .192–.207. Broadcast is .207.

### b29 · medium
**Prompt:** How many /30 subnets can be carved from a single /27 network?
- a) 4 · **b) 8** · c) 16 · d) 2
**Explanation:** Going from /27 to /30 borrows 3 more bits: 2^3 = 8 /30 subnets per /27.

### b30 · medium
**Prompt:** Which of the following IP addresses is a valid usable host in the 10.5.0.64/26 subnet?
- a) 10.5.0.64 · b) 10.5.0.127 · **c) 10.5.0.100** · d) 10.5.0.128
**Explanation:** /26 block size 64: subnet is 10.5.0.64 (network) to 10.5.0.127 (broadcast). Usable range: .65–.126.

### b31 · medium
**Prompt:** In a VLSM design, which prefix is most appropriate for a WAN point-to-point link requiring only 2 usable host addresses?
- a) /29 · **b) /30** · c) /28 · d) /31
**Explanation:** /30 provides exactly 2 usable hosts (2^2 - 2 = 2), traditional choice for P2P WAN links.

### b32 · medium
**Prompt:** How many /24 subnets can be created from a /16 network block?
- a) 16 · b) 64 · **c) 256** · d) 512
**Explanation:** Moving from /16 to /24 borrows 8 bits: 2^8 = 256 subnets.

### b33 · easy
**Prompt:** What is the dotted-decimal mask for a /30 prefix?
- a) 255.255.255.240 · b) 255.255.255.248 · **c) 255.255.255.252** · d) 255.255.255.254
**Explanation:** /30 has 30 network bits. The last octet has 6 bits set: 11111100 = 252.

### b34 · easy
**Prompt:** What is the first usable host address in the 172.20.0.0/22 subnet?
- a) 172.20.0.0 · **b) 172.20.0.1** · c) 172.20.1.1 · d) 172.20.0.2
**Explanation:** 172.20.0.0 is the network address. The first usable host is 172.20.0.1.

### b35 · hard
**Prompt:** What is the broadcast address for 172.20.0.0/22?
- a) 172.20.0.255 · b) 172.20.2.255 · **c) 172.20.3.255** · d) 172.20.4.255
**Explanation:** /22 block size in the third octet is 4. 172.20.0.0/22 spans 172.20.0.0–172.20.3.255.

### b36 · easy
**Prompt:** How many usable host addresses are in a /30 subnet?
- **a) 2** · b) 4 · c) 6 · d) 0
**Explanation:** /30 leaves 2 host bits: 2^2 = 4 total minus network and broadcast = 2 usable hosts.

### b37 · medium
**Prompt:** A network administrator needs to subnet for a department of 25 hosts. Which is the smallest subnet prefix that accommodates all hosts?
- a) /28 — 14 usable · **b) /27 — 30 usable** · c) /26 — 62 usable · d) /25 — 126 usable
**Explanation:** /28 gives only 14 usable hosts — not enough. /27 gives 30 usable hosts.

### b38 · medium
**Prompt:** What is the network address for host 192.168.1.100/27?
- a) 192.168.1.64 · **b) 192.168.1.96** · c) 192.168.1.128 · d) 192.168.1.80
**Explanation:** /27 block size is 32. Subnets: .0, .32, .64, .96, .128... Host .100 falls in the .96 block.

### b39 · medium
**Prompt:** What is the last usable host address in the 192.168.1.96/27 subnet?
- a) 192.168.1.127 · **b) 192.168.1.126** · c) 192.168.1.128 · d) 192.168.1.125
**Explanation:** /27 subnet .96 spans .96–.127. Broadcast is .127. Last usable host is .126.

### b40 · medium
**Prompt:** What is the broadcast address for 192.168.1.96/27?
- a) 192.168.1.126 · **b) 192.168.1.127** · c) 192.168.1.128 · d) 192.168.1.255
**Explanation:** /27 block size 32: the .96 subnet spans .96–.127. The broadcast address is 192.168.1.127.

---

## PART 4 — Flashcards (6)

| Front | Back |
|-------|------|
| Usable hosts formula? | 2^host_bits - 2 |
| /26 usable hosts? | 62 usable addresses (64 total minus network and broadcast) |
| What is VLSM? | Variable Length Subnet Masks — using different prefix lengths within one network design |
| Borrow 2 host bits from /24 creates: | 4 subnets (/26) |
| Block size for /26 in fourth octet? | 64 |
| VLSM benefit? | Different mask sizes to reduce wasted IPs |

---

## PART 5 — Suggested ChatGPT prompt

Paste everything above, then add:

> You are a CCNA student with no prior subnetting experience beyond the IPv4 prerequisite listed. Walk through Part 1 card by card. At each CHECKPOINT, answer the question and rate readiness 1–5. Flag any card where you would feel lost. Then review Part 3 question bank and flag questions that require knowledge not taught in Part 1. Recommend reordering, wording fixes, and missing visual aids.

---

## Checkpoint order summary (in-lesson)

| # | After cards | Question ID | Tests |
|---|-------------|-------------|-------|
| 1 | 16 (total vs usable) | q4 | /28 total addresses |
| 2 | 20 (cheat order) | q5 | Network = all 0 host bits |
| 3 | 24 (worked examples) | q1 | /26 usable hosts |
| 4 | 32 (block range drill) | q2 | /24 broadcast |
| 5 | 36 (VLSM walkthrough) | q3 | VLSM definition |
