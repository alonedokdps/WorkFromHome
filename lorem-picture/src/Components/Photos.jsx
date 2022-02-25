import axios from "axios";
import React, {useEffect, useState} from "react";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list")
      .then((res) => {
        setPhotos(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="grid bg-red-500 p-5 grid-cols-5 ">
      <div className="p-3 bg-white shadow-lg rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="p-3 bg-white shadow-lg rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="p-3 bg-white shadow-lg rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="p-3 bg-white shadow-lg rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="p-3 bg-white shadow-lg rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="p-3 bg-white shadow-lg rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1644982648774-83312909bbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Photos;
