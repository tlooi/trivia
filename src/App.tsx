import './App.css';

import EvolvingBackground from './components/EvolvingBackground';
import GameCard from './components/GameCard';
import GameProvider from './context/GameContext';

function App() {
    
    return (
        <>
            <EvolvingBackground />
            <GameProvider>
                <GameCard />
            </GameProvider>
        </>
    )
}

export default App
