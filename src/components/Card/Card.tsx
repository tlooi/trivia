import './Card.css';

import { ChildrenProp } from '../../types/component';
import { motion } from 'framer-motion';

export default function Card({ children }: ChildrenProp) {
    return (
        <motion.div initial={{ y: "-100vh", scale: 0, opacity: 0 }} animate={{ y: 0, scale: 1, opacity: 1 }} className='card'>
            {children}
        </motion.div>
    );
}