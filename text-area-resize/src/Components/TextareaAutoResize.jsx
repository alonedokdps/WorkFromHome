import React from "react";

const TextareaAutoResize = () => {
  return (
    <div className="p-5">
      <h1 className="uppercase ">text resize</h1>
      <textarea className="w-full max-w-[400px] p-5 rounded-lg border border-gray-300 focus:border-blue-500 resize-none "></textarea>
    </div>
  );
};

export default TextareaAutoResize;
