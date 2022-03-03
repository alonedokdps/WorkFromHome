import React, {useEffect, useRef} from "react";

const Input = () => {
  const inputref = useRef();
  const forcus = () => {
    inputref.current.focus();
  };
  useEffect(() => {}, []);
  console.log("ok");
  return (
    <>
      <button onClick={forcus}>click</button>
      <input type="text" className="input" ref={inputref} />
    </>
  );
};

export default Input;
