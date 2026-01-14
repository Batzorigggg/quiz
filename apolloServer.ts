import { quizQueryTypeDefs, quizTypeDefs } from "./src/quiz/graphql/schema.ts";

export const typeDefs = `
    ${quizTypeDefs}

    type Query{
    ${quizQueryTypeDefs}}

    type Mutation{}
`;
export const resolvers = {
  Query: {},
  Mutation: {},
};
