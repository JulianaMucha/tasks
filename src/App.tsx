import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
// import { TwoDice } from "./components/TwoDice";
// import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <br></br>
                <span style={{ color: "red" }}>Juliana Mucha</span>
                <br></br>
                <span style={{ font: "verdana" }}>
                    <h1>Hi! We are using State!</h1>
                </span>
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            {/* <hr />
            <TwoDice></TwoDice> */}
            <hr />
            <ChangeType></ChangeType>
            {/* <hr />
            <CycleHoliday></CycleHoliday> */}
        </div>
    );
}

export default App;
