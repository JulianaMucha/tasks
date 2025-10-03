import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("");

    function increaseAttempts(): void {
        setAttemptsLeft(
            parseInt(attemptsRequested) && parseInt(attemptsRequested) >= 0 ?
                attemptsLeft + parseInt(attemptsRequested)
            :   attemptsLeft,
        );
    }

    function decreaseAttempts(): void {
        setAttemptsLeft(attemptsLeft - 1 >= 0 ? attemptsLeft - 1 : 0);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            Number of attempts: <span>{attemptsLeft}</span>
            <Form.Group controlId="QuizAttempts">
                {/* numeric textbox */}
                <Form.Label>Attempts Requested:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setAttemptsRequested(event.target.value);
                    }}
                ></Form.Control>
                {/* use button */}
                <Button
                    onClick={decreaseAttempts}
                    disabled={attemptsLeft === 0}
                >
                    Use Attempt
                </Button>
                {"   "}
                {/* gain button */}
                <Button onClick={increaseAttempts}>Gain Attempt(s)</Button>
            </Form.Group>
        </div>
    );
}
