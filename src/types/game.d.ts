import React from "react"
import { QuestionData } from "./data"

export type GameContextType = {
    questions: QuestionData[],
    currentQuestion: number,
    selectedAnswers: number[],
    setQuestions: (questions: QuestionData[]) => void,
    setCurrentQuestion: (question: number) => void,
    setSelectedAnswers: (answers: number[]) => void
}
