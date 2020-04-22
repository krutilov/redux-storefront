import * as React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCount } from "../../store/slices/counter";

import { increment, decrement } from "../../store/slices/counter";

export const Counter: React.FC = () => {
  const count = useSelector(getCount);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
