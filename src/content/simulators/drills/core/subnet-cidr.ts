import type { ChoiceDrillItem } from "@/components/simulators/SimulatorRegistry";

function ipToInt(octets: number[]): number {
  return ((octets[0] << 24) | (octets[1] << 16) | (octets[2] << 8) | octets[3]) >>> 0;
}

function intToIp(n: number): string {
  return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join(".");
}

function networkAddr(ip: number, prefix: number): number {
  const mask = prefix === 0 ? 0 : (~0 << (32 - prefix)) >>> 0;
  return (ip & mask) >>> 0;
}

function broadcastAddr(ip: number, prefix: number): number {
  const mask = prefix === 0 ? 0 : (~0 << (32 - prefix)) >>> 0;
  return (ip | (~mask >>> 0)) >>> 0;
}

function hostCount(prefix: number): number {
  if (prefix >= 31) return prefix === 31 ? 2 : 1;
  return Math.pow(2, 32 - prefix) - 2;
}

function makeChoices(correct: string, distractors: string[]) {
  const all = [correct, ...distractors.slice(0, 3)];
  const shuffled = [...all].sort(() => Math.random() - 0.5);
  const letters = ["a", "b", "c", "d"];
  const choices = shuffled.map((text, i) => ({ id: letters[i], text }));
  const correctChoiceId = choices.find((c) => c.text === correct)!.id;
  return { choices, correctChoiceId };
}

const PREFIXES = [24, 25, 26, 27, 28, 29, 30];
const BASES = [
  [192, 168, 1, 0],
  [10, 0, 0, 0],
  [172, 16, 0, 0],
  [192, 168, 10, 0],
  [10, 10, 0, 0],
];

function generateSubnetQuestions(): ChoiceDrillItem[] {
  const items: ChoiceDrillItem[] = [];

  for (const base of BASES) {
    for (const prefix of PREFIXES) {
      const hostOctet = Math.floor(Math.random() * 200) + 10;
      const ip = [...base.slice(0, 3), hostOctet];
      const ipInt = ipToInt(ip);
      const net = networkAddr(ipInt, prefix);
      const bcast = broadcastAddr(ipInt, prefix);
      const hosts = hostCount(prefix);

      const netStr = intToIp(net);
      const bcastStr = intToIp(bcast);
      const cidr = `${ip.join(".")}/${prefix}`;

      const q1 = makeChoices(netStr, [intToIp(net + 1), intToIp(net + 4), bcastStr]);
      items.push({
        id: `net-${cidr}`,
        prompt: `What is the network address for ${cidr}?`,
        choices: q1.choices,
        correctChoiceId: q1.correctChoiceId,
        weakConcept: "Network address calculation",
        explanation: `Apply the /${prefix} mask to find the network address: ${netStr}.`,
      });

      const q2 = makeChoices(bcastStr, [netStr, intToIp(bcast - 1), intToIp(net + 2)]);
      items.push({
        id: `bcast-${cidr}`,
        prompt: `What is the broadcast address for ${cidr}?`,
        choices: q2.choices,
        correctChoiceId: q2.correctChoiceId,
        weakConcept: "Broadcast address calculation",
        explanation: `The broadcast address is the last address in the subnet: ${bcastStr}.`,
      });

      const q3 = makeChoices(String(hosts), [String(hosts + 2), String(hosts - 2), String(hosts * 2)]);
      items.push({
        id: `hosts-${prefix}`,
        prompt: `How many usable host addresses are in a /${prefix} subnet?`,
        choices: q3.choices,
        correctChoiceId: q3.correctChoiceId,
        weakConcept: "Host count from CIDR",
        explanation: `A /${prefix} subnet has 2^${32 - prefix} - 2 = ${hosts} usable hosts.`,
      });
    }
  }

  return items;
}

export const SUBNET_CIDR_POOL: ChoiceDrillItem[] = generateSubnetQuestions();
