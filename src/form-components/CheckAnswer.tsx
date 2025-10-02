import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    function typeAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAnswer(event.target.value);
    }
    return (
        <div>
            {/* <h3>Check Answer</h3> */}
            <Form.Group controlId="answer">
                <Form.Label>What is the answer?</Form.Label>
                <Form.Control value={givenAnswer} onChange={typeAnswer} />
            </Form.Group>
            <div>
                <h3>
                    Check Answer {givenAnswer === expectedAnswer ? "✔️" : "❌"}
                </h3>
            </div>
        </div>
    );
}
