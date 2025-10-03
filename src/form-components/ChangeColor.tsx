import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [choosenColor, setChoosenColor] = useState<string>("red");

    const COLORS = [
        "red",
        "purple",
        "green",
        "orange",
        "pink",
        "lightblue",
        "yellow",
        "grey",
    ];

    function changeColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChoosenColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="colors"
                    id={`colored-box-${color}`}
                    label={
                        <span style={{ backgroundColor: color }}>{color}</span>
                    }
                    value={color}
                    checked={choosenColor === color}
                    onChange={changeColor}
                />
            ))}
            <br></br> The current color is {""}
            <span
                data-testid="colored-box"
                style={{ backgroundColor: choosenColor }}
            >
                {choosenColor}
            </span>
        </div>
    );
}
