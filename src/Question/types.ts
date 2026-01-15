import Document from "mongoose";

export interface IQuestions {
  question: string;
}
export interface IQuestionsDocument extends IQuestions, Document {}
