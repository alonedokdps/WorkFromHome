import "./App.css";
import Data from "./Data.jsx";
import {Navigation, Pagination, Scrollbar, A11y} from "swiper";

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function App() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{clickable: true}}
      scrollbar={{draggable: true}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {Data.map((item, index) => {
        return (
          <SwiperSlide key={item.id}>
            <div className="slide-content">
              <div className="slide-img">
                <img src={item.url_img} className="img" alt="" />
              </div>
              <div className="slide-txt">
                <div className="slide-title">
                  <h3>{item.title}</h3>
                  <a href="google.vn">View More</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default App;
