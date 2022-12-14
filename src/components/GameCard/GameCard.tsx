import './GameCard.css';

import { motion, Variants } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { GameContext } from '../../context/GameContext';
import { GameContextType } from '../../types/game';
import parseHTML from '../../utils/parseHTML';
import Answers from '../Answers';
import useFetch from '../hooks/useFetch';

const loadingVariant: Variants = {
    initial: {
        opacity: 0,
        x: -400
    },
    animate: {
        opacity: 1,
        x: 0
    },
    exit: {
        opacity: 0,
        x: -400
    }
}

export default function GameCard() {
    const { data, loading } = useFetch('https://opentdb.com/api.php?amount=10');
    const { currentQuestion, setQuestions, setCurrentQuestion } = useContext(GameContext) as GameContextType;

    useEffect(() => {
        if (data) {
            const gameData = data.results.map(val => {
                // val.
                return {
                    category: val.category,
                    question: val.question,
                    type: val.type,
                    answers: [val.correct_answer, ...val.incorrect_answers].filter(() => Math.random() > 0.5 ? 1 : -1),
                    correct_answer: val.correct_answer
                }
            })

            setCurrentQuestion(0);
            setQuestions(gameData);
        }
    }, [data]);

    if (loading || data == null) {
        return (
            <motion.h1 variants={loadingVariant} initial="initial" animate="animate" exit="exit" transition={{ staggerChildren: 0.1 }}>
                <motion.span variants={loadingVariant}>L</motion.span>
                <motion.span variants={loadingVariant}>o</motion.span>
                <motion.span variants={loadingVariant}>a</motion.span>
                <motion.span variants={loadingVariant}>d</motion.span>
                <motion.span variants={loadingVariant}>i</motion.span>
                <motion.span variants={loadingVariant}>n</motion.span>
                <motion.span variants={loadingVariant}>g</motion.span>
            </motion.h1>
        );
    }

    return (
        <motion.div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }} variants={loadingVariant} initial="initial" animate="animate" exit="exit" transition={{ staggerChildren: 0.1 }}>
            <h1>
                {parseHTML(data.results[currentQuestion].question)}
            </h1>
            {/* <div>{data.results[currentQuestion].type}</div> */}
            <Answers />
            {/* Render Boolean Question */}
            {/* Render MCQ Question */}
            {/* Render number of questions */}

            <div className="traversal-wrapper">
                <div onClick={() => { currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1) }}>???</div>
                <div>Home</div>
                <div onClick={() => { currentQuestion < data.results.length - 1 && setCurrentQuestion(currentQuestion + 1) }}>???</div>
            </div>
            {/* <div style={{display: "flex", justifyContent: "space-around"}}>
                <span onClick={() => {currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}}>Previous</span>
                <span onClick={() => {currentQuestion < data.results.length - 1 && setCurrentQuestion(currentQuestion + 1)}}>Next</span>
            </div> */}
        </motion.div>
    );
}