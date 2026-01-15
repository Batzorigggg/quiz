import { Schema, model } from "mongoose";
import { IQuestionsDocument, type IQuestions } from "./types.ts";

const QuestionsSchema: Schema<IQuestionsDocument> = new Schema({
  question: { type: String, required: true },
});
export const Questions = model<IQuestionsDocument>(
  "questions",
  QuestionsSchema
);
