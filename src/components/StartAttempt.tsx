import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attemptCount, setAttemptCount] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function quizStopStart(): void {
        setAttemptCount(!inProgress ? attemptCount - 1 : attemptCount);
        setInProgress(!inProgress);
    }

    function increaseAttempts(): void {
        setAttemptCount(attemptCount + 1);
    }

    return (
        <div>
            {/* <Button onClick={quizStopStart}>Start Attempt</Button> */}
            <div>Attempts Remaining: {attemptCount}</div>

            {/* Start Quiz Button visibility */}
            <Button
                onClick={quizStopStart}
                disabled={inProgress || attemptCount === 0}
            >
                Start Quiz
            </Button>

            {"  "}

            {/* Stop Quiz Button visibility */}
            <Button onClick={quizStopStart} disabled={!inProgress}>
                Stop Quiz
            </Button>

            {"  "}

            {/* Mulligan Button visibility */}
            <Button onClick={increaseAttempts} disabled={inProgress}>
                Mulligan
            </Button>

            {/* Old Code --> doesn't account for disabled buttons, only replaces buttons */}
            {/* ({inProgress ?
                <>
                    <Button onClick={quizStopStart}>Stop Quiz</Button>
                    <Button onClick={increaseAttempts}>Mulligan</Button>
                </>
            : attemptCount !== 0 ?
                <>
                    <Button onClick={quizStopStart}>Start Quiz</Button>
                    <Button onClick={increaseAttempts}>Mulligan</Button>
                </>
            :   <>
                    <Button onClick={quizStopStart} disabled>
                        Stop Quiz
                    </Button>
                    <Button onClick={increaseAttempts}>Mulligan</Button>
                </>
            }
            ) */}
        </div>
    );
}
