import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_up, act_down, act_random } from "../redux/action";
function CountComp() {
  // Sử dụng useSelector để lấy newState về UI
  const count = useSelector((state) => state.count);
  // Sử dụng useDispatch để gửi action lên store
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Demo Redux</h1>
      <p>Count:{count}</p>
      <button onClick={() => dispatch(act_up(10))}>UP</button>
      <button onClick={() => dispatch(act_down(5))}>DOWN</button>
      {/* BT */}
      <button onClick={() => dispatch(act_random())}>RANDOM</button>
    </div>
  );
}

export default CountComp;
