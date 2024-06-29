import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { changeValue, decrement, increment } from "../Stores/Counter";

const Counter = () => {
    const { count } = useSelector((state) => state.counter);
    const disptach = useDispatch();

    return (
        <div>
            <button onClick={() => disptach(decrement())}>-</button>
            <input type="number" value={count} onChange={(e) =>  disptach(changeValue(e.target.value))}/>
            <button onClick={() => disptach(increment())}>+</button>
        </div>
    )
}

export default Counter;