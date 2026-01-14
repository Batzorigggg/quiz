import { Schema, model } from "mongoose";
import { type IAnswersDocument, type IQuizDocument } from "./types.ts";

const AnswersSchema: Schema<IAnswersDocument> = new Schema({
  answerOne: { type: String, required: true },
  answerTwo: { type: String, required: true },
  answerThree: { type: String, required: true },
  answerFour: { type: String, required: true },
});

const QuizSchema: Schema<IQuizDocument> = new Schema({
  q: { type: String, required: true },
  answers: { AnswersSchema },
});

export const Quiz = model<IQuizDocument>("quiz", QuizSchema);
