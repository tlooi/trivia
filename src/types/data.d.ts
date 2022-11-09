export type QuestionData = {
    category: string,
    type: 'multiple' | 'boolean',
    question: string,
    correct_answer: string,
    answers: string[]
}

export interface IAPIData {
    responseCode: any,
    results: APIRawQuestionData[]
}

export type APIRawQuestionData = {
    category: string,
    type: 'multiple' | 'boolean',
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}