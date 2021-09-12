import React, { useState } from "react";
import "./styles.css";

const CounterText = (props) => {
  return (
    <p>
      <b>{props.name}</b>のカウント数：{props.count}
    </p>
  );
};

const INITIAL_COUNT = 0;

const Counter = (props) => {
  const [count, setCount] = useState(INITIAL_COUNT);
  const countAdd = () => setCount((prevCount) => prevCount + 1);
  const countSub = () => setCount((prevCount) => prevCount - 1);
  const countReset = () => setCount(INITIAL_COUNT);

  return (
    <>
      <CounterText count={count} name={props.name} />
      <button onClick={countAdd}>ボタン +1</button>
      <button onClick={countSub}>ボタン -1</button>
      <button onClick={countReset}>リセット</button>
    </>
  );
};

export default function App() {
  return (
    <>
      <Counter name="腕立て伏せ" />;
      <Counter name="腹筋" />;
      <Counter name="スクワット" />;
    </>
  );
}
