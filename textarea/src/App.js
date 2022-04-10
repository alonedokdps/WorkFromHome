import {useEffect, useRef, useState} from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [parenHeight, setParenHeight] = useState("auto");
  const HandleChange = (event) => {
    setTextareaHeight("auto");
    setText(event.target.value);
  };
  useEffect(() => {
    console.log("do something");
  }, [text]);
  return (
    <div className="p-5" style={{minHeight: parenHeight}}>
      <textarea
        className="p-5 transition all overflow-hidden w-full focus:border-blue-500 max-w-[400px] rounded-lg border border-gray-400  "
        placeholder="please enter ....."
        value={text}
        style={{height: textareaHeight}}
        ref={textareaRef}
        onChange={HandleChange}
        value={text}
      ></textarea>
    </div>
  );
}

export default App;
