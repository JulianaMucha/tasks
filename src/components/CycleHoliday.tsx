import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    // Halloween 🎃, Christmas 🎄, St. Patrick's Day 🍀, Easter 🐣, Valentine's Day 💝
    const [Holiday, setHoliday] = useState<string>("🎃");

    // C🎄, E🐣, H🎃, S🍀, V💝
    function alphabetically(): void {
        setHoliday(
            Holiday === "🎄" ? "🐣"
            : Holiday === "🐣" ? "🎃"
            : Holiday === "🎃" ? "🍀"
            : Holiday === "🍀" ? "💝"
            : "🎄",
        );
    }

    // Feb💝, Mar🍀, Apr🐣, Oct🎃, Dec🎄
    function yearly(): void {
        setHoliday(
            Holiday === "💝" ? "🍀"
            : Holiday === "🍀" ? "🐣"
            : Holiday === "🐣" ? "🎃"
            : Holiday === "🎃" ? "🎄"
            : "💝",
        );
    }

    return (
        <div>
            <Button onClick={alphabetically}>Advance by Alphabet</Button>
            {"  "}
            <Button onClick={yearly}>Advance by Year</Button>
            <br></br>
            <span data-testid="Holiday">Holiday: {Holiday}</span>
        </div>
    );
}
