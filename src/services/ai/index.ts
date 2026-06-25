import type { AiPracticeQuestion, AiTutorService } from "./types";

// Future: aiService hook from lesson page
export const aiTutorService: AiTutorService = {
  async explainTopic() {
    throw new Error("AI tutor not implemented");
  },
  async generatePractice(): Promise<AiPracticeQuestion[] | null> {
    throw new Error("AI tutor not implemented");
  },
};

export type { AiTutorMessage, AiPracticeQuestion, AiTutorService } from "./types";
