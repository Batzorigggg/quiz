import { Questions } from "../models.ts";
import { type IQuestions } from "../types.ts";

export const questionMutation = {
  addQuestion: async (_root: any, { input }: { input: IQuestions }) => {
    const { question } = input;
    await Questions.insertOne({
      question,
    });
    return "success";
  },
};
