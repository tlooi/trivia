import React from "react"
import { QuestionData } from "./data"

export type GameContextType = {
    questions: QuestionData[] | null,
    currentQuestion: number,
    setQuestions: (questions: QuestionData[] | null) => void,
    setCurrentQuestion: (question: number) => void
}
