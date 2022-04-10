import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y} from "swiper";
import {AiFillStar} from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";
import "./Home.css";
const getData = async () => {
  try {
    let res = await axios.get("https://fakestoreapi.com/products?limit=5");
    return res.data;
  } catch (err) {
    throw err;
  }
};
const Home = () => {
  const [slide, setSlide] = useState([]);
  useEffect(() => {
    getData()
      .then((img) => {
        setSlide(img);
        console.log(img);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="section slide">
      <div className="title">
        <h3>
          New <span>Products</span>
        </h3>
      </div>
      <div className="slide-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{clickable: true}}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {slide &&
            slide.length > 0 &&
            slide.map((item, index) => (
              <SwiperSlide>
                <div className="image-slide" key={item.title}>
                  <img src={item.image} alt={item.title} />
                </div>
              </SwiperSlide>
            ))}
          ...
        </Swiper>
      </div>
    </div>
    
  );
};

export default Home;
