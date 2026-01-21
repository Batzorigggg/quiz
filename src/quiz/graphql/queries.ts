import { Question, Quiz } from "../model.ts";

export const quizChoosingQueries = {
  quizz: async (_root: undefined) => {
    const quizs = await Quiz.find({});
    const a = quizs.length;
    const rand = [];
    for (let i = 0; i < 5; i++) {
      const b = Math.floor(Math.random() * a);
      rand.push(quizs[b]);
    }
    return rand;
  },
};
