import axios from "axios";
import React, {useEffect, useState} from "react";
import "./Photos.css";
const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  useEffect(() => {
    axios
      .get(`https://picsum.photos/v2/list?page=${nextPage}&limit=6`)
      .then((res) => {
        if (res.data) {
          setPhotos(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [nextPage]);
  const handleChangeLoad = () => {
    const clone = [...photos];

    setNextPage((prevState) => nextPage + 1);
    setPhotos([...clone, ...photos]);
    console.log("check photos", photos);
  };

  return (
    <>
      <div className="list">
        {photos &&
          photos.length > 0 &&
          photos.map((item, index) => {
            return (
              <div className="image" key={item.id}>
                <img src={item.download_url} alt={item.author} />
              </div>
            );
          })}
      </div>
      <div className="btn-load">
        <button onClick={handleChangeLoad}>Load More</button>
      </div>
    </>
  );
};

export default Photos;
