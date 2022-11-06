import './EvolvingBackground.css';

import { motion } from 'framer-motion';


export default function EvolvingBackground() {
    const angle = ~~(Math.random() * 360);

    return (
        <motion.div
            id="background"
            animate={{
                background: [`linear-gradient(${angle}deg, red, 75%, blue)`, `linear-gradient(${angle + 180}deg, red, 25%, blue)`, `linear-gradient(${angle + 360}deg, red, 75%, blue)`]
            }}
            transition={{
                repeat: Infinity,
                duration: 100,
                ease: 'linear'
            }}
        />
    )
}
