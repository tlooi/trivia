import { Link } from 'react-router-dom';
import './HomeCard.css';

export default function HomeCard() {
    return (
        <>
            <div className='title'>Trivia</div>
            <Link to='/play' className="start-button">Start</Link>
        </>
    );
}