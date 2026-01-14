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
  questionId: IQuestion;
  answersId: IAnswers;
}

export interface IQuizDocument extends IQuiz, Document {}
