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
    variant: String
    question: String
}

type Quiz {
    _id: ID
    question: String
    answers: [Answers]
}
input questionInput {
    variant: String
    question: String
    }
`;
export const quizQueryTypeDefs = `
  quizz(variant: String): Question
`;
export const quizMutationTypeDefs = `
addQuestion(input:questionInput):Question
addAnswers(input:answersInput):Answers`;
