import { ccna } from "../../src/content/certifications/ccna";

export interface CcnaTopicRef {
  domainId: string;
  domainName: string;
  topicId: string;
  topicName: string;
  quizCount: number;
  flashcardCount: number;
  bankCount: number;
  assignmentCount: number;
  hasExperience: boolean;
  hasSteps: boolean;
}

export function listCcnaTopics(): CcnaTopicRef[] {
  return ccna.domains.flatMap((domain) =>
    domain.topics.map((topic) => ({
      domainId: domain.id,
      domainName: domain.name,
      topicId: topic.id,
      topicName: topic.name,
      quizCount: topic.quiz.length,
      flashcardCount: topic.flashcards.length,
      bankCount: topic.questionBank?.length ?? 0,
      assignmentCount: topic.assignments?.length ?? 0,
      hasExperience: (topic.lesson.experience?.screens?.length ?? 0) > 0,
      hasSteps: (topic.lesson.steps?.length ?? 0) > 0,
    }))
  );
}
