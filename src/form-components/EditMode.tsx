import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [isInEditMode, setIsInEditMode] = useState<boolean>(false);

    return (
        <div>
            <h3>Edit Mode</h3>
            <h6>
                {!isInEditMode ?
                    isStudent ?
                        `${name} is a student`
                    :   `${name} is not a student`
                :   ""}
            </h6>

            {/* edit mode switch */}
            <Form.Check
                type="switch"
                id="edit-mode-check"
                label="Edit Mode?"
                checked={isInEditMode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setIsInEditMode(event.target.checked);
                }}
            />
            {/* name textbox */}
            {isInEditMode && (
                <>
                    <Form.Group controlId="nameText">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setName(event.target.value);
                            }}
                        />
                    </Form.Group>

                    {/* student checkbox */}
                    <Form.Check
                        type="checkbox"
                        id="is-a-student"
                        label="Student?"
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setIsStudent(event.target.checked);
                        }}
                    />
                </>
            )}
        </div>
    );
}
