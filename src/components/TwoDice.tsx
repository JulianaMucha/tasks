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
                    "Lose"
                :   "Win"
            :   "Neither"
        );
    }

    return (
        <div>
            left die:
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <span data-testid="left-die">{leftDieValue}</span>
            right die:
            <Button onClick={rollRightDie}>Roll Right</Button>
            <span data-testid="right-die">{rightDieValue}</span>
            <span data-testid="winOrLose?">{isEqualButNotOnes()}</span>
        </div>
    );
}
