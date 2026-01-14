import Document from "mongoose";

export interface IAnswers {
  answerOne: string;
  answerTwo: string;
  answerThree: string;
  answerFour: string;
}

export interface IQuiz {
  q: string;
  answers: IAnswers;
}

export interface IQuizDocument extends IQuiz, Document {}
export interface IAnswersDocument extends IAnswers, Document {}
