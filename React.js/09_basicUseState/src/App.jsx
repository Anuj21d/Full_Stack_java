import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function increaseNum() {
    setNum(num + 1);
  }
  function decreaseNum() {
    setNum(num - 1);
  }
  function resetNum() {
    setNum(0);
  }
  function increase5Num() {
    setNum(num + 5);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={resetNum}>reset</button>
      <button onClick={increase5Num}>increase by 5</button>
    </div>
  );
};

export default App;
