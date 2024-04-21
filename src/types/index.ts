export type IDifficulty = "easy" | "medium" | "hard";

export interface IQuestion {
  category: string;
  type: "multiple" | "boolean";
  difficulty: IDifficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  choices?: string[];
}

export interface IScore {
  questionNo: number;
  answeredCorrectly: boolean;
}

export interface ICourse {
  name: string;
  subjects: number;
}

export interface IMcq {
  id?: string;
  question: string;
  codeBlock?: string;
  correct_answer: string;
  incorrect_answers: string[];
}
