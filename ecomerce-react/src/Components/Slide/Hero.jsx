import React from "react";
import {Link} from "react-router-dom";
import bike from "../../images/MTBROMO_N7_2022.png";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="slide-container" id="hero-slide">
        <div className="slide active">
          <div className="slide-txt">
            <div className="slide-title">
              <h3>polygon siskiu</h3>
            </div>
            <div className="slide-description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint
                vero laboriosam, dicta officia optio inventore voluptate ipsa
                iste accusantium aspernatur assumenda mollitia itaque doloribus
                temporibus, maxime similique perspiciatis at!
              </p>
            </div>
            <div className="slide-btn">
              <Link to="/" className="hero-btn">
                buy now
              </Link>
            </div>
          </div>
          <div className="slide-img ">
            <img src={bike} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
