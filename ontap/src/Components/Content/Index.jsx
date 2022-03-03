import React, {useState} from "react";
import "./Index.css";
import TodoList from "./TodoList";

const Index = () => {
  const [value, setValue] = useState("Adc");
  return (
    <div className="section">
      <div className="section-container">
        <div className="col1">
          <div className="col-title">
            <h1>
              TodoList With ReactJS <i class="fa-brands fa-react"></i>{" "}
            </h1>
          </div>
          <div className="col-txt">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae fugit, dicta natus dolor rerum quo dolores alias,
              possimus dolore in praesentium, ducimus placeat! Nesciunt id
              consectetur error suscipit ratione maxime.
            </p>
          </div>
          <div className="col-btn">
            <button className="btn">View Tutorial</button>
          </div>
        </div>
        <div className="col2">
          <div className="form">
            <div className="text-input">
              <input
                type="text"
                placeholder="input here...."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button onClick={() => alert("ok")}>ADD</button>
            </div>
            <div className="todo"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
