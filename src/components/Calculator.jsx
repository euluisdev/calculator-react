import React, { useState } from "react";
import './Calculator.css'
import { Box, Container } from "@mui/material";

function Calculator() {
    const [num, setNum] = useState(0);

    function updateScreen (e) {
        const inputValue = e.target.innerText;

        if (num === 0) {
            setNum(inputValue);
        } else {
            setNum(num + inputValue);
        }
    }

    function clear () {
        setNum(0);
    }

    function percentage () {
        setNum(num / 100);
    }

    return (
        <div>
            <Box m={6} />
            <Container maxWidth="xs">
                <div className="wrapper">
                    <h1 className="resOperation">{num}</h1> 
                    <Box m={9} />
                    <button onClick={clear}>AC</button>
                    <button>+/-</button>
                    <button onClick={percentage}>%</button>
                    <button className="orange">/</button>
                    <button className="gray" onClick={updateScreen}>7</button>
                    <button className="gray" onClick={updateScreen}>8</button>
                    <button className="gray" onClick={updateScreen}>9</button>
                    <button className="orange" onClick={updateScreen}>*</button>
                    <button className="gray" onClick={updateScreen}>4</button>
                    <button className="gray" onClick={updateScreen}>5</button>
                    <button className="gray" onClick={updateScreen}>6</button>
                    <button className="orange">-</button>
                    <button className="gray" onClick={updateScreen}>1</button>
                    <button className="gray" onClick={updateScreen}>2</button>
                    <button className="gray" onClick={updateScreen}>3</button>
                    <button className="orange">+</button>
                    <button className="gray wide" onClick={updateScreen}>0</button>
                    <button className="gray" onClick={updateScreen}>,</button>
                    <button className="orange">=</button>
                </div>
            </Container>
        </div>
    )
}

export default Calculator;