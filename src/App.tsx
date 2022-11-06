import './App.css';

import EvolvingBackground from './components/EvolvingBackground';
import HomeCard from './components/HomeCard';
import GameProvider from './context/GameContext';

import { Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import GameCard from './components/GameCard';


function App() {

    return (
        <>
            <EvolvingBackground />
            <GameProvider>
                <Routes>
                    <Route
                        index
                        element={
                            <Card>
                                <HomeCard />
                            </Card>
                        }
                    />
                    <Route
                        path='/play'
                        element={
                            <Card>
                                <GameCard />
                            </Card>
                        }
                    />
                </Routes>
            </GameProvider>
        </>
    )
}

export default App
