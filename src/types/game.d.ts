import React from "react"
import { QuestionData } from "./data"

export type GameContextType = {
    questions: QuestionData[],
    currentQuestion: number,
    setQuestions: (questions: QuestionData[]) => void,
    setCurrentQuestion: (question: number) => void
}
