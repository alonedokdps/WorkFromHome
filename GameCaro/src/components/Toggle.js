import React, {useState} from "react";
import "./Toggle.css";
function Toggle() {
  const [on, setOn] = useState(false);
  return (
    <>
      <div
        className={on ? `toggle active` : "toggle"}
        onClick={() => setOn(!on)}
      >
        <div className={on ? `spinner active` : `spinner`}></div>
      </div>
    </>
  );
}

export default Toggle;
