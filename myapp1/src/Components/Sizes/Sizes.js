import React from "react";

const Sizes = ({sizes}) => {
  return (
    <div className="sizes">
      {sizes.map((size, index) => (
        <button>{size}</button>
      ))}
    </div>
  );
};

export default Sizes;
