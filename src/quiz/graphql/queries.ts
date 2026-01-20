import { Question, Quiz } from "../model.ts";

export const quizChoosingQueries = {
  quizz: async (_root: undefined) => {
    const quizs = await Question.find({});
    const a = quizs.length;
    const rand = [];
    for (let i = 0; i < 5; i++) {
      const b = Math.random() * (a - 0) + 0;
      rand.push(quizs[b]);
    }
    return rand;
  },
};
