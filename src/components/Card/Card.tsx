import './Card.css';

import { CardProp } from '../../types/card';
import { motion } from 'framer-motion';

export default function Card({ children }: CardProp) {
    return (
        <motion.div initial={{ y: "-100vh", scale: 0, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} className='card'>
            {children}
        </motion.div>
    );
}