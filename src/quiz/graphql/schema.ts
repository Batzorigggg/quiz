export const quizTypeDefs = `
type Answers{
questionId: String
    answerId:ID
    answerOne:String
    answerTwo:String
    answerThree:String
}

input answersInput{
questionId:String
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
    answers: [Answers]
}
input questionInput {
    question: String
    }
`;
export const quizQueryTypeDefs = `
    quizz()
  quiz(variant: String): [String]
`;
export const quizMutationTypeDefs = `
addQuestion(input:questionInput):Question
addAnswers(input:answersInput):Answers`;
