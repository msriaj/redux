import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { barbe, kombe } from "./redux/Slices/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();

  const handleIncrease = () => dispatch(kombe(10));
  const handleDecrease = () => dispatch(barbe(10));
  const counterValue = useSelector((state) => state.counter);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        height: "100vh",
      }}
    >
      <button style={{ padding: "20px" }} onClick={handleDecrease}>
        -
      </button>
      <div>{counterValue.value}</div>
      <button style={{ padding: "20px" }} onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default Counter;
