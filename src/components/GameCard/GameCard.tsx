import './GameCard.module.css';

import { AnimatePresence, motion, Variants } from 'framer-motion';
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
        <motion.div variants={loadingVariant} initial="initial" animate="animate" exit="exit" transition={{ staggerChildren: 0.1 }}>
            <h1 dangerouslySetInnerHTML={{ __html: data.results[0].question }} />
            {data.results[0].type === 'boolean' ? <div>Boolean</div> : <div>MCQ</div>}
            {/* Render Boolean Question */}
            {/* Render MCQ Question */}
            {/* Render number of questions */}
        </motion.div>
    );
}