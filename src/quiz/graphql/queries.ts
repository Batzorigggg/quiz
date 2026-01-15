import { Question, Quiz } from "../model.ts";

export const quizQueries = {
  quizz: async (_root: undefined, { variant }: { variant: string }) => {
    const user = await Question.find({ variant });
    return user;
  },
};
