export const quizTypeDefs = `
type Answers{
    answerOne:String
    answerTwo:String
    answerThree:String
    answerId:ID
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
`;
export const quizQueryTypeDefs = `
  quiz(_id: ID): Quiz
`;
