import { useReducer } from "react";

type action = {
  type: "increment" | "decrement";
};

type state = {
  count: number;
};

const Reducer = (state: state, action: action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const tryApp = () => {
  const [state, dispatch] = useReducer(Reducer, { count: 0 });
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      {/* Other components */}
      {/* ... */}
    </div>
  );
};

export default tryApp;
