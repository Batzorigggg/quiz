import { Schema, model } from "mongoose";
import {
  IQuestionDocument,
  type IAnswersDocument,
  type IQuizDocument,
} from "./types.ts";

const AnswersSchema: Schema<IAnswersDocument> = new Schema({
  answerTwo: { type: String, required: true },
  answerThree: { type: String, required: true },
  answerOne: { type: String, required: true },
});

const QuestionSchema: Schema<IQuestionDocument> = new Schema({
  questionId: { type: String, required: true },
  question: { type: String, required: true },
});

const QuizSchema: Schema<IQuizDocument> = new Schema({
  answerId: { type: String, required: true },
  question: { QuestionSchema },
  answers: { AnswersSchema },
});

export const Quiz = model<IQuizDocument>("quiz", QuizSchema);
