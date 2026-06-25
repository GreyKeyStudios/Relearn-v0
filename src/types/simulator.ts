/** Every simulator component must return this on completion */
export interface SimulatorResult {
  score: number;
  total: number;
  weakConcepts: string[];
  completed: boolean;
}

export interface SimulatorAttempt {
  simulatorId: string;
  certId: string;
  topicKey?: string;
  assignmentId?: string;
  score: number;
  total: number;
  weakConcepts: string[];
  completed: boolean;
  completedAt: string;
}
