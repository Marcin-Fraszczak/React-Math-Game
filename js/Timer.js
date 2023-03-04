import React, {useEffect, useState} from "react"

const Timer = ({isrunning, timelimit, endgame, parentround}) => {

    const [time, setTime] = useState()
    const [round, setRound] = useState(parentround)

    useEffect(() => {
        let intervalID
        if (isrunning && round >= parentround - 1) {
            if (time > 0.1) {
                intervalID = setInterval(() => {
                    setTime(prevTime => prevTime - 0.1)
                }, 100)
            } else {
                endgame({result: 'Time is up'})
            }
        } else {
            setRound(parentround - 1)
            setTime(timelimit)
        }
        return () => clearInterval(intervalID)
    }, [time, isrunning, round])

    const prettyDisplayTime = (t) => {
        return ('0000' + t.toFixed(1)).slice(-4)
    }

    return <h3 className='m-2'>Timer: {isrunning ? prettyDisplayTime(time) : '00.0'}</h3>
}

export {Timer}