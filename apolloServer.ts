import {
  userTypeDefs,
  userMutationTypeDefs,
} from "./src/user/graphql/schema.ts";

import { userMutations } from "./src/user/graphql/mutation.ts";

export const typeDefs = `
    ${userTypeDefs}
    type Query{hello: String!}
    type Mutation {
    ${userMutationTypeDefs}
    }`;

export const resolvers = {
  Mutation: {
    ...userMutations,
  },
};
