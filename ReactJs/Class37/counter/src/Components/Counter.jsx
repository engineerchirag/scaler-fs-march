import { useReducer, useState } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return { ...state, count: state.count + 1 };
    }
    case "decrement": {
      return { ...state, count: state.count - 1 };
    }
    case "change": {
        const newState = { ...state };
        if(action.payload) {
            newState.count = Number(action.payload);
        } else {
            newState.count = '';
        }
      return newState;
    }
    default: {
      return state;
    }
  }
};

const actions = {
  decrement: () => {
    return { type: "decrement" };
  },
  increment: () => {
    return { type: "increment" };
  },
  changeValue: (data) => {
    return { type: "change", payload: data };
  },
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch(actions.decrement())}>-</button>
      <input
        type="number"
        value={state.count}
        onChange={(e) => dispatch(actions.changeValue(e.target.value))}
      />
      <button onClick={() => dispatch(actions.increment())}>+</button>
    </div>
  );
};

export default Counter;
