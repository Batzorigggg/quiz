import Document from "mongoose";

export interface IAnswers {
  answerId: string;
  answerOne: string;
  answerTwo: string;
  answerThree: string;
}

export interface IQuestion {
  questionId: string;
  question: string;
}

export interface IQuiz {
  quizId: string;
  question: IQuestion;
  answers: IAnswers;
}

export interface IQuizDocument extends IQuiz, Document {}
export interface IAnswersDocument extends IAnswers, Document {}
export interface IQuestion extends IQuestion, Document {}
