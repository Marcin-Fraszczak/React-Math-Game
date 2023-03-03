import React from "react";

const Buttons = ({isrunning, data, endgame, butnumber}) => {

    const buttonTypes = {true: 'btn-success', false: 'btn-danger'}
    let style = {width: '5em', height: '3em'}

    const checkAnswer = (e, answer) => {
        // e.target.style.border = '5px solid blue'
        let result = data.correctAnswer === answer ? 'You won' : 'You lost'
        endgame({result: result})
    }

    const buttonsText = data ? data.answers : Array.from(' '.repeat(butnumber))

    // console.log("buttons rendering")
    return buttonsText.map((item, index) =>
        <button key={index} style={style} disabled={!isrunning} onClick={(e) => checkAnswer(e, item)}
                className={(data && !isrunning) ? `btn m-2 ${buttonTypes[item === data.correctAnswer]}` : `btn m-2 btn-warning`}>
            {item}</button>
    )
}

export {Buttons}