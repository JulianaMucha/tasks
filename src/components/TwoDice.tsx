import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDieValue, setLeftDieValue] = useState<number>(1);
    const [rightDieValue, setRightDieValue] = useState<number>(4);

    function rollLeftDie(): void {
        setLeftDieValue(d6());
    }

    function rollRightDie(): void {
        setRightDieValue(d6());
    }

    function isEqualButNotOnes(): string {
        return (
            leftDieValue === rightDieValue ?
                leftDieValue === 1 ?
                    "You Lose ☹"
                :   "You Win!"
            :   "Keep Playing?"
        );
    }

    return (
        <div>
            <Button onClick={rollLeftDie}>Roll Left</Button> {"  "}
            Left die: {"  "}
            <span data-testid="left-die">{leftDieValue}</span>
            {" 🎲 "}
            <Button onClick={rollRightDie}>Roll Right</Button> {"  "}
            Right die: {"  "}
            <span data-testid="right-die">{rightDieValue}</span> {" 🎲"}
            <br></br>
            <span data-testid="winOrLose?">{isEqualButNotOnes()}</span>
        </div>
    );
}
