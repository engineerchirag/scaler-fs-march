import { useRef, useState } from "react";

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setRunningState] = useState(false);
    let timerRef = useRef();

    const startTimer = () => {
        if (isRunning) {
            clearInterval(timerRef.current);
            timerRef.current = null;
            setRunningState(false);
        } else {
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
            setRunningState(true);
        }
    }

    const resetTimer = () => {
        setTime(0);
        setRunningState(true);
    }

    const stopTimer = () => {
        clearInterval(timerRef.current);
        setTime(0);
        timerRef.current = null;
        setRunningState(false);
    }

    const formatTime = () => {
        const seconds = `0${time % 60}`.slice(-2);
        const minutes = `0${Math.floor(time / 60) % 60}`.slice(-2);
        const hours = `0${Math.floor(time / 3600)}`.slice(-2);
        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <div>
            <h1>Time = {formatTime()}</h1>
            <div>
                <button onClick={startTimer}>{isRunning ? 'Pause' : 'Start'}</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    )
}

export default StopWatch;