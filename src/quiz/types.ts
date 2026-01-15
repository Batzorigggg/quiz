import Document from "mongoose";

export interface IAnswers {
  questionId: string;
  answerOne: string;
  answerTwo: string;
  answerThree: string;
}

export interface IQuestion {
  variant: string;
  question: string;
}

export interface IQuiz {
  quizId: string;
  answersId: string;
}

export interface IQuizDocument extends IQuiz, Document {}
