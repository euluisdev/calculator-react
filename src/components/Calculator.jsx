import React from "react";
import './Calculator.css'
import { Box, Container } from "@mui/material";

function Calculator() {

    return (
        <div>
            <Box m={6} />
            <Container maxWidth="xs" >
                <div className="wrapper" >
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>AC</button>
                    <button>+/-</button>
                    <button>%</button>
                    <button>/</button>
                    <button>X</button>
                    <button>-</button>
                    <button>+</button>
                    <button>=</button>
                </div>
            </Container>
        </div>
    )
}

export default Calculator;