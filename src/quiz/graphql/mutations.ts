import { type IAnswers, type IQuestion, type IQuiz } from "../types.ts";
import { Quiz, Answers, Question } from "../model.ts";

export const questionMutation = {
  addQuestion: async (_root: any, { input }: { input: IQuestion }) => {
    const { question, quizId } = input;
    await Question.insertOne({
      question,
      quizId,
    });
    return "success";
  },
};

export const answerMutation = {
  addAnswers: async (_root: any, { input }: { input: IAnswers }) => {
    const { answerOne, answerTwo, answerThree, questionId } = input;
    await Answers.insertOne({
      questionId,
      answerOne,
      answerTwo,
      answerThree,
    });
    return "success";
  },
};
