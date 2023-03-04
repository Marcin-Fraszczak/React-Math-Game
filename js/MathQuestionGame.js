import React, {useState, useRef} from "react"
import {Buttons} from "./Buttons"
import {Timer} from "./Timer"
import {timeLimit, noOfAnswers, actions, getRandomElement, getRandomNumber, shuffle} from "./config"

const MathQuestionGame = () => {
    const [isRunning, setIsRunning] = useState(false)
    const [data, setData] = useState(null)
    const [round, setRound] = useState(0)
    const buttonRef = useRef(null)

    const prepareData = () => {
        const [a, b] = [getRandomNumber(1, 10), getRandomNumber(1, 10)]
        const action = getRandomElement(actions)
        const correctAnswer = Math.round(eval(`${a} ${action} ${b}`) * 100) / 100
        const answers = selectAnswers({correctAnswer: correctAnswer, spread: 3, noOfAnswers: noOfAnswers - 1})
        return {a: a, b: b, action: action, correctAnswer: correctAnswer, answers: answers}
    }

    const selectAnswers = ({correctAnswer, spread, noOfAnswers}) => {
        if (spread < noOfAnswers / 2) {
            spread = Math.ceil(noOfAnswers / 2)
        }
        let pool = []
        for (let i = correctAnswer - spread; i <= correctAnswer + spread; i++) {
            i = Math.round(i * 100) / 100
            i - correctAnswer && pool.push(i)
        }
        shuffle(pool)
        let answers = [...pool.slice(0, noOfAnswers), correctAnswer]
        shuffle(answers)
        return answers
    }

    const newGame = () => {
        setIsRunning(true)
        setData(prepareData())
        setRound(prevRound => prevRound + 1)
    }

    const endGame = ({result}) => {
        buttonRef.current.focus()
        setIsRunning(false)
        setData(prevData => {
            return {
                ...prevData,
                result: result
            }
        })
    }

    return (
        <div>
            <button className='btn btn-primary m-2' style={{width: '10em'}} autofocus='true' ref={buttonRef}
                    onClick={newGame}>{data ? 'Play again  [Enter]' : 'Start  [Enter]'}</button>
            <h1 className='m-2'>{isRunning ? `${data.a} ${data.action} ${data.b} =` : data ? data.result : 'Get ready'}</h1>
            <Buttons data={data} isrunning={isRunning} endgame={endGame} butnumber={noOfAnswers}/>
            <Timer isrunning={isRunning} timelimit={timeLimit} endgame={endGame} parentround={round}/>
        </div>
    )
}

export {MathQuestionGame}