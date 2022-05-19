import React, {useState} from 'react';
import {xStore} from "../js/xStore";
import {observer} from "mobx-react-lite";
import {motion} from "framer-motion";
import Modal from "../components/modal";
import AnimX from "../components/animX";
import Anim0 from "../components/anim0";
import {IWinner} from '../interfaces';


const Tictac: React.FC = () => {
    const [isXTurn, setIsXTurn] = useState<boolean>(true)
    const {game} = xStore;
    const handleClick = (id: number): void => {
        if (
            winner().winnerSymbol === '' && // if game is not over
            game[id] === '' // if cell is empty
        ) {
            const newGame: string[] = game
            newGame[id] = isXTurn ? 'x' : '0'
            xStore.setGame(newGame)
            setIsXTurn(!isXTurn)
        }
    }
    const restartGame = () => {
        xStore.setGame(Array.from({length: 9}, () => ''))
        setIsXTurn(true)
    }
    const winner = (): IWinner => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        let won: IWinner = {winnerSymbol: '', wonLine: []}
        lines.forEach(([a, b, c]) => {
            if (game[a] === game[b] && game[a] === game[c] && game[a] !== '') {
                won = {winnerSymbol: game[a], wonLine: [a, b, c]}
            }
        })
        return won
    }
    const element = (id: number) => {
        if (game[id] !== '') {
            return game[id] === 'x' ? <AnimX/> : <Anim0/>
        }
    }
    return (
        <>
            <Modal shown={winner().winnerSymbol !== ''}>
                <h1>{`Player "${winner().winnerSymbol.toUpperCase()}" won !!`}</h1>
                <button onClick={restartGame}>Restart</button>
            </Modal>
            <div className="app__content game">
                {game.map((item: string, index: number) => (
                    <motion.div
                        initial={{y: -100, opacity: 0}}
                        animate={{y: 0, opacity: 1, transition: {delay: 1 - 0.1 * index}}}
                        onClick={() => handleClick(index)}
                        key={index}
                        className={`game__item ${winner().wonLine.includes(index) ? 'game__item-won' : ''}`}
                    >
                        {element(index)}
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default observer(Tictac);