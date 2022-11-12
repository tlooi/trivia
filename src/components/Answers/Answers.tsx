import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import { GameContextType } from '../../types/game';
import parseHTML from '../../utils/parseHTML';
import './Answers.css';

export default function Answers() {
    const { questions, currentQuestion, selectedAnswers, setSelectedAnswers } = useContext(GameContext) as GameContextType;

    let possibleAnswers: string[] = [];
    if (questions.length) {
        possibleAnswers = questions[currentQuestion].answers;
    }

    function selectAnswer(index: number) {
        selectedAnswers[currentQuestion] = index;
        setSelectedAnswers([...selectedAnswers]);
        console.log(selectedAnswers[currentQuestion]);
    }

    return (
        <div className="answers-wrapper">
            {possibleAnswers.map((val, index) => {
                console.log(val, parseHTML(val));
                return (
                    <div className={index == selectedAnswers[currentQuestion] ? 'selected answer' : 'answer'} onClick={() => { selectAnswer(index); }} key={val}>
                        {parseHTML(val)}
                    </div>
                );
            })}
        </div>
    );
}