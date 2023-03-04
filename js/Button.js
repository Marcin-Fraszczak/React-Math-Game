import React, {useEffect, useState} from "react";

const Button = ({isrunning, data, endgame, item}) => {
    const [border, setBorder] = useState('')

    const buttonTypes = {true: 'btn-success', false: 'btn-danger'}
    let style = {width: '5em', height: '3em', border: border}

    const checkAnswer = (answer) => {
        setBorder('5px solid blue')
        let result = data.correctAnswer === answer ? 'You won' : 'You lost'
        endgame({result: result})
    }

    useEffect(() => {
        if (isrunning) {
            setBorder('')
        }
    })

    return <button style={style} disabled={!isrunning} onClick={() => checkAnswer(item)}
                   className={(data && !isrunning) ? `btn m-2 ${buttonTypes[item === data.correctAnswer]}` : `btn m-2 btn-warning`}>
        {item}</button>
}

export {Button}