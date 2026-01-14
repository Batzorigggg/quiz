import { quizQueries } from "./src/quiz/graphql/queries.ts";
import {
  quizMutationTypeDefs,
  quizQueryTypeDefs,
  quizTypeDefs,
} from "./src/quiz/graphql/schema.ts";
import { quizMutation } from "./src/quiz/graphql/mutations.ts";

export const typeDefs = `
    ${quizTypeDefs}

    type Query{
    ${quizQueryTypeDefs}}
    type Mutation{${quizMutationTypeDefs}}

`;
export const resolvers = {
  Query: { ...quizQueries },
  Mutation: { ...quizMutation },
};
