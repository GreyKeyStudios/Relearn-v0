import type { ChoiceDrillItem } from "@/components/simulators/SimulatorRegistry";

function octetToBinary(n: number): string {
  return n.toString(2).padStart(8, "0");
}

function ipToBinary(ip: string): string {
  return ip.split(".").map((o) => octetToBinary(parseInt(o, 10))).join(".");
}

function makeBinaryChoices(correctIp: string, pool: string[]): { choices: { id: string; text: string }[]; correctChoiceId: string } {
  const correct = ipToBinary(correctIp);
  const distractors = pool.filter((ip) => ip !== correctIp).slice(0, 3).map(ipToBinary);
  const all = [correct, ...distractors];
  const shuffled = [...all].sort(() => Math.random() - 0.5);
  const letters = ["a", "b", "c", "d"];
  const choices = shuffled.map((text, i) => ({ id: letters[i], text }));
  const correctChoiceId = choices.find((c) => c.text === correct)!.id;
  return { choices, correctChoiceId };
}

function makeDecimalChoices(correctIp: string, pool: string[]): { choices: { id: string; text: string }[]; correctChoiceId: string } {
  const distractors = pool.filter((ip) => ip !== correctIp).slice(0, 3);
  const all = [correctIp, ...distractors];
  const shuffled = [...all].sort(() => Math.random() - 0.5);
  const letters = ["a", "b", "c", "d"];
  const choices = shuffled.map((text, i) => ({ id: letters[i], text }));
  const correctChoiceId = choices.find((c) => c.text === correctIp)!.id;
  return { choices, correctChoiceId };
}

const SAMPLE_IPS = [
  "192.168.1.10",
  "10.0.0.1",
  "172.16.5.100",
  "203.0.113.50",
  "192.168.10.255",
  "10.10.10.10",
  "172.20.1.1",
  "192.168.0.254",
];

function buildPool(): ChoiceDrillItem[] {
  const items: ChoiceDrillItem[] = [];

  for (const ip of SAMPLE_IPS) {
    const q1 = makeBinaryChoices(ip, SAMPLE_IPS);
    items.push({
      id: `to-bin-${ip}`,
      prompt: `Convert ${ip} to binary (dotted format, 8 bits per octet):`,
      choices: q1.choices,
      correctChoiceId: q1.correctChoiceId,
      weakConcept: "Decimal to binary IP conversion",
      explanation: `Each octet converts separately: ${ipToBinary(ip)}.`,
    });

    const binary = ipToBinary(ip);
    const q2 = makeDecimalChoices(ip, SAMPLE_IPS);
    items.push({
      id: `to-dec-${ip}`,
      prompt: `Convert ${binary} to dotted decimal:`,
      choices: q2.choices,
      correctChoiceId: q2.correctChoiceId,
      weakConcept: "Binary to decimal IP conversion",
      explanation: `Group into 8-bit octets and convert each to decimal: ${ip}.`,
    });
  }

  items.push(
    {
      id: "bin-mask-1",
      prompt: "What is the binary representation of subnet mask 255.255.255.0?",
      choices: [
        { id: "a", text: "11111111.11111111.11111111.00000000" },
        { id: "b", text: "11111111.11111111.00000000.00000000" },
        { id: "c", text: "11111111.11111111.11111111.11111111" },
        { id: "d", text: "11111111.00000000.00000000.00000000" },
      ],
      correctChoiceId: "a",
      weakConcept: "Subnet mask in binary",
      explanation: "/24 = 24 network bits (all 1s) then 8 host bits (0s).",
    },
    {
      id: "bin-octet-1",
      prompt: "Binary octet 11000000 equals decimal:",
      choices: [
        { id: "a", text: "192" },
        { id: "b", text: "128" },
        { id: "c", text: "224" },
        { id: "d", text: "240" },
      ],
      correctChoiceId: "a",
      weakConcept: "Single octet binary conversion",
      explanation: "128 + 64 = 192.",
    },
    {
      id: "bin-octet-2",
      prompt: "Decimal 10 in 8-bit binary is:",
      choices: [
        { id: "a", text: "00001010" },
        { id: "b", text: "00001001" },
        { id: "c", text: "00010000" },
        { id: "d", text: "10100000" },
      ],
      correctChoiceId: "a",
      weakConcept: "Decimal to 8-bit binary",
      explanation: "8 + 2 = 10 → 00001010.",
    }
  );

  return items;
}

export const BINARY_IP_POOL: ChoiceDrillItem[] = buildPool();
