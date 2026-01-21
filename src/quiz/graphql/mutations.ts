import { type IAnswers, type IQuestion, type IQuiz } from "../types.ts";
import { Quiz, Answers, Question } from "../model.ts";

type Questions = {
  question: string;
  options: {
    answerOne: string;
    answerTwo: string;
    answerThree: string;
  };
};

export const questionMutation = {
  addQuestion: async (_root: any, { input }: { input: IQuestion }) => {
    const { question } = input;
    await Question.insertOne({
      question,
    });
    return "success";
  },

  addQuiz: async (_parent: undefined, { name }: { name: string }) => {
    return await Quiz.insertOne({ name });
  },

  addQuestionsAndAnswers: async (
    _parent: undefined,
    { quizId, questions }: { quizId: string; questions: Questions[] },
  ) => {
    for (const q of questions || []) {
      const { question, options } = q || {};

      const newQuestion = await Question.insertOne({
        quizId,
        question,
      });

      await Answers.insertOne({
        questionId: String(newQuestion._id),
        ...options,
      });
    }

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
