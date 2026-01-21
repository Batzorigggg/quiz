import Document from "mongoose";

export interface IAnswers {
  questionId: string;
  answerOne: string;
  answerTwo: string;
  answerThree: string;
}

export interface IQuestion {
  question: string;
  quizId: string;
}

export interface IQuiz {
  name: string;
}

export interface IQuizDocument extends IQuiz, Document {
  answerId: string;
}
