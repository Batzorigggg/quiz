export const quizTypeDefs = `
type Answers{
    answerOne:String
    answerTwo:String
    answerThree:String
}

input AnswersInput{
    answerOne:String
    answerTwo:String
    answerThree:String
}

type Question {
    questionId: ID
    question: String
}

type Quiz {
    _id: ID
    question: String
    answers: [Answers]
}
input questionInput {
    question: String
    }
`;
export const quizQueryTypeDefs = `
  quiz(_id: ID): Quiz
`;
export const quizMutationTypeDefs = `
addQuestion(input:questionInput):Question`;
