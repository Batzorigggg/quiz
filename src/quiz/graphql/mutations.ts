import { type IQuestion, type IQuiz } from "../types.ts";
import { Quiz, Answers, Question } from "../model.ts";

export const quizMutation = {
  addQuestion: async (_root: undefined, { input }: { input: IQuestion }) => {
    const { question } = input;
    const quiz = await Question.insertOne({
      question: input.question,
    });
    return quiz;
  },
};
