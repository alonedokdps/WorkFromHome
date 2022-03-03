import axios from "axios";
import React, {useEffect, useState} from "react";
const getRamdomPhotos = async (page) => {
  try {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const Photos = () => {
  const [ramdomPhotos, setRamdomPhoTos] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const handleLoadMore = async () => {
    const image = await getRamdomPhotos(nextPage);
    const newArr = [...ramdomPhotos, ...image];
    setRamdomPhoTos(newArr);
    setNextPage(nextPage + 1);
  };
  useEffect(() => {
    handleLoadMore();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {ramdomPhotos.length > 0 &&
          ramdomPhotos.map((item, index) => {
            return (
              <div
                key={item.id}
                className="p-3 bg-white shadow-md rounded-lg h-[200px]"
              >
                <img
                  src={item.download_url}
                  alt={item.author}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            );
          })}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMore}
          className="text-white px-4 py-3 bg-blue-500"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Photos;
