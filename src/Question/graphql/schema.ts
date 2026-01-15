export const questionTypeDefs = `

type Question {
    question: String
}

input questionInput {
    question: String
    }
`;
export const questionQueryTypeDefs = `
  quiz(_id: ID): Question
`;
export const questionMutationTypeDefs = `
addQuestion(input:questionInput):Question`;
