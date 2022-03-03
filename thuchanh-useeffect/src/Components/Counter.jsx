import React, {useEffect} from "react";
import {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState({
    firstName: "phan",
    lastName: "do",
  });
  //   useEffect(() => {
  //     console.log(`counter: ${count}`);
  //   }, [count]);
  useEffect(() => {
    console.log("from input");
  }, [name.firstName]);
  return (
    <div className="p-5 flex gap-x-3 items-center justify-center">
      <input
        type="text"
        className="px-4 py-2 "
        placeholder="input your name ...."
        name="lastName"
        onChange={(e) => setName({...name, lastName: e.target.value})}
      />
      {/* <span className="text-2xl font-bold ">{count}</span>

      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 text-white bg-green-500 "
      >
        Increment
      </button> */}
    </div>
  );
};

export default Counter;
