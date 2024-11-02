import React from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";

const Banner = () => {
  const BannerRightData = [
    {
      id: 1,
      img: "https://i.ytimg.com/vi/5C7pekvoy7A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAY9z4q34r5QwwkxfJ0Y8i6VSpWWQ",
    },
    {
      id: 2,
      img: "https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/178337/Originals/Btaskee-3.jpg",
    },
  ];

  return (
    <section id="home-banner">
      <div className="container">
        <div className="home-banner-content">
          <div className="banner-slider-wrapper banner-left">
            <Slider />
          </div>
          <div className="banner-right-imgs">
            {BannerRightData.map((item) => (
              <div key={item.id} className="banner-img-wrapper">
                <Link to="/list-service">
                  <img
                    src={item.img}
                    alt="banner-img"
                    style={{
                      width: "390px",
                      height: "193px",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
