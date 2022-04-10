import React from "react";

const Colors = ({colors}) => {
  return (
    <div className="colors">
      {colors.map((color, index) => (
        <button style={{backgroundColor: `${color}`}}>{color}</button>
      ))}
    </div>
  );
};

export default Colors;
