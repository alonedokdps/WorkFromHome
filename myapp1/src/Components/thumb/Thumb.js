import React from "react";

const Thumb = ({images, changeImg}) => {
  return (
    <div className="thumb">
      {images.map((img, index) => (
        <img src={img} onClick={() => changeImg(img)} />
      ))}
    </div>
  );
};

export default Thumb;
