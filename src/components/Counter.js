import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const show = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const incrementBy5Handler = () => {
    dispatch({ type: "increseby5" });
  };
  const increase5Handler = () => {
    dispatch({ type: "increase", amount: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increase5Handler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
