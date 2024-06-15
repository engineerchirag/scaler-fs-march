import { useEffect } from "react";
import { useState } from "react";

const Counter = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    const increase = () => {
        console.log('Before > ', count);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        setCount((prevVal) => {
            return prevVal + 1;
        });
        setCount((prevVal) => {
            return prevVal + 1;
        });
        setCount((prevVal) => {
            return prevVal + 1;
        });

        setCount((prevVal) => {
            return prevVal + 1;
        });
        setCount((prevVal) => {
            return prevVal + 1;
        });
        console.log('After > ', count);
    }

    const decrease = () => {
        console.log('Before > ', count);
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
        console.log('After > ', count);
    }

    useEffect(() => {
        console.log('Birth: Mount');
    }, []);

    useEffect(() => {
        console.log('Update: Update', count);
    });

    useEffect(() => {
        return () => {
            console.log('Dead: Unmount');
        }
    }, []);

    return (
        <div className="counter">
            <button onClick={decrease}>-</button>
            <span>{count}</span>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default Counter;