import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function toggleVisibility(): void {
        setVisible(!visible);
    }

    return (
        <div>
            <Button onClick={toggleVisibility}>Reveal Answer</Button>
            {visible && 42}
        </div>
    );
}
