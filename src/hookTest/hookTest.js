import React, { useState } from 'react';

function HookTest({initialCount}) {
  const [count, setCount] = useState(1);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(1)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </>
  );
}

export default HookTest;