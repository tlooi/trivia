import React from "react"

export interface IQuestion {
    category: string,
    question: string,
    correctAnswer: string,
    incorrectAnswers: string[]
}

export interface GameProviderProps {
    children: React.ReactNode
}

export type GameContextType = {
    questions: IQuestion[],
    currentQuestion: number,
    setQuestions: (questions: IQuestion[]) => void,
    setCurrentQuestion: (question: number) => void
}
