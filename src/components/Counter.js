import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter.js";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => {
    return state.counter.counter;
  });

  const showCounter = useSelector((state) => {
    return state.counter.showCounter;
  });

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     { showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button
          className={classes["counter-button"]}
          onClick={incrementHandler}
        >
          Increment
        </button>
        <button
          className={classes["counter-button"]}
          onClick={decrementHandler}
        >
          Decrement
        </button>
        <button className={classes["counter-button"]} onClick={increaseHandler}> Increase by 5 </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
