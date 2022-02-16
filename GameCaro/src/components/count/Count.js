import React, {useState} from "react";

function Count() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    // setTimeout(() => setCount((count) => count + 1), 1000);
    setCount(count + 1);
  };
  return <div onClick={handleCount}>Increment {count}</div>;
}

export default Count;
