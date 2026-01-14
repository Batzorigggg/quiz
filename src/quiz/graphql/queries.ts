import { model } from "mongoose";
import { Quiz } from "../model.ts";

export const quizQueries = {
  quizDetail: async (_root: undefined, { _id }: { _id: string }) => {
    const user = await Quiz.findOne({ _id });
    return user;
  },
};
