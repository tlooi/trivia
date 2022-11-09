import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import { GameContextType } from '../../types/game';
import './Answers.css';

export default function Answers() {
    const { questions, currentQuestion } = useContext(GameContext) as GameContextType;
    
    let possibleAnswers: string[] = [];
    if (questions.length) {
        possibleAnswers = 
            [questions[currentQuestion].correct_answer, ...questions[currentQuestion].incorrect_answers]
                .sort(() => Math.random() > 0.5 ? 1 : -1);
    }
    
    return (
        <div className="answers-wrapper">
            {possibleAnswers.map((val) => {
                return (
                    <div className='answer' key={val} dangerouslySetInnerHTML={{__html: val}} />
                );
            })}
        </div>
    );
}