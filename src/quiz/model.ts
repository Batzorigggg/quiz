import { Schema, model } from "mongoose";
import { type IQuizDocument, type IQuestion, type IAnswers } from "./types.ts";

const AnswersSchema: Schema<IAnswers> = new Schema({
  answerId: { type: String, required: true },
  answerTwo: { type: String, required: true },
  answerThree: { type: String, required: true },
  answerOne: { type: String, required: true },
});

const QuestionSchema: Schema<IQuestion> = new Schema({
  questionId: { type: String, required: true },
  question: { type: String, required: true },
});

const QuizSchema: Schema<IQuizDocument> = new Schema({
  questionId: { QuestionSchema },
  answersId: { AnswersSchema },
});

export const Quiz = model<IQuizDocument>("quiz", QuizSchema);
export const Answers = model<IAnswers>("answers", AnswersSchema);
export const Question = model<IQuestion>("questions", QuestionSchema);
