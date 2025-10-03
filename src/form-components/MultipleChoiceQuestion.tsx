import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    function chooseAnOption(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedChoice(event.target.value);
    }

    return (
        <div>
            <h3>
                Multiple Choice Question{" "}
                {selectedChoice === expectedAnswer ? "✔️" : "❌"}
            </h3>
            <Form.Group controlId="multipleChoiceQuestions">
                <Form.Label>Select the correct answer:</Form.Label>
                <Form.Select value={selectedChoice} onChange={chooseAnOption}>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
