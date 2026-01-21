export const quizTypeDefs = `
type Answers{
questionId: String
    answerId:String
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
    _id: String
    question: String
}

type Quiz {
    _id: String
    name: String
}

input Options {
 answerOne: String
 answerTwo: String
    answerThree: String
}

input QuizOptions {
    question: String
    options: Options
}
input questionInput {
    question: String
    }
`;
export const quizQueryTypeDefs = `
    quizz(_id: ID): [Question]
`;
export const quizMutationTypeDefs = `
addQuestion(input:questionInput):Question
addAnswers(input:answersInput):Answers
addQuiz(name: String): Quiz
addQuestionsAndAnswers(quizId: String, questions: [QuizOptions]): String
`;
