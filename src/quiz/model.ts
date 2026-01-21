import { Schema, model } from "mongoose";
import { type IQuizDocument, type IQuestion, type IAnswers } from "./types.ts";

const AnswersSchema: Schema<IAnswers> = new Schema({
  questionId: { type: String, required: true },
  answerTwo: { type: String },
  answerThree: { type: String },
  answerOne: { type: String, required: true },
});

const QuestionSchema: Schema<IQuestion> = new Schema({
  question: { type: String, required: true },
  quizId: { type: String, required: true },
});

const QuizSchema: Schema<IQuizDocument> = new Schema({
  name: { type: String, required: true },
});

export const Quiz = model<IQuizDocument>("quiz", QuizSchema);
export const Answers = model<IAnswers>("answers", AnswersSchema);
export const Question = model<IQuestion>("questions", QuestionSchema);
