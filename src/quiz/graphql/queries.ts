import { Question } from "../model.ts";
import { type IQuestion } from "../types.ts";

export const quizQueries = {
  quizz: async (_root: undefined, { variant }: { variant: string }) => {
    const a = await Question.find({ variant });
    return a;
  },
};
