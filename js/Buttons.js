import React from "react";
import {Button} from "./Button"

const Buttons = ({isrunning, data, endgame, butnumber}) => {
    const buttonsText = data ? data.answers : Array.from(' '.repeat(butnumber))

    return buttonsText.map((item, index) =>
        <Button key={index} isrunning={isrunning} data={data} endgame={endgame} item={item}/>
    )
}

export {Buttons}