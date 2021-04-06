import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);
  const onCountUp = () => {
    setCount(count + 1);
  };
  const onCountDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p>count: {count}</p>
      <button onClick={onCountUp}>Increment</button>
      <button onClick={onCountDown}>Decrement</button>
    </>
  )
}

export default Counter
