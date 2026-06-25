export interface AiTutorMessage {
  role: "user" | "assistant";
  content: string;
}

export interface AiPracticeQuestion {
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
}

export interface AiTutorService {
  explainTopic(certId: string, topicId: string, question: string): Promise<string | null>;
  generatePractice(certId: string, topicId: string, count: number): Promise<AiPracticeQuestion[] | null>;
}
