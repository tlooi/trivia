export type QuestionData = {
    category: string,
    type: 'multiple' | 'boolean',
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

export interface IAPIData {
    responseCode: any,
    results: QuestionData[]
}