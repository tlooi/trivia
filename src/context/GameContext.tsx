import { createContext, useState } from "react";
import { ChildrenProp } from "../types/component";
import { QuestionData } from "../types/data";
import { GameContextType } from "../types/game";

export const GameContext = createContext<GameContextType | null>(null);

export default function GameProvider({ children }: ChildrenProp) {
    const [questions, setQuestions] = useState<QuestionData[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);

    return (
        <GameContext.Provider value={{ questions, currentQuestion, setQuestions, setCurrentQuestion }}>
            {children}
        </GameContext.Provider>
    );
}