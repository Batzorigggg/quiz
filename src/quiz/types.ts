import Document from "mongoose";

export interface IAnswers {
  questionId: string;
  answerOne: string;
  answerTwo: string;
  answerThree: string;
}

export interface IQuestion {
  quizId: string;
  question: string;
}

export interface IQuiz {
  variant: string;
}

export interface IQuizDocument extends IQuiz, Document {}
