import { createContext, useState } from "react";
import { GameContextType, GameProviderProps, IQuestion } from "../types/game";

export const GameContext = createContext<GameContextType | null>(null);

export default function GameProvider({ children }: GameProviderProps) {
    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);

    return (
        <GameContext.Provider value={{ questions, currentQuestion, setQuestions, setCurrentQuestion }}>
            {children}
        </GameContext.Provider>
    );
}