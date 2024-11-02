import React, { useState } from "react";
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Slider = () => {
  const SliderData = [
    {
      id: 1,
      img: "https://www.btaskee.com/wp-content/uploads/2019/03/Banner-giup-viec-nha-home-cleaning-bTaskeer-web-vie.jpg",
    },
    {
      id: 2,
      img: "https://www.btaskee.com/wp-content/uploads/2021/10/102021-banner-ho-chi-minh-da-nang-tro-lai-pc-eng.jpg",
    },
    {
      id: 3,
      img: "https://www.btaskee.com/wp-content/uploads/2021/12/bTaskee_2111-29_TCBC-Premium.jpg",
    },
  ];

  const [tabIndex, setTabIndex] = useState(1);

  const handleRightBtnClick = () => {
    setTabIndex(tabIndex + 1);
    if (tabIndex >= 3) setTabIndex(1);
  };

  const handleLeftBtnClick = () => {
    setTabIndex(tabIndex - 1);
    if (tabIndex <= 1) setTabIndex(3);
  };

  return (
    <div className="banner-slider">
      {/* ======= Slide item ======= */}
      {SliderData.map((item) => (
        <div
          key={item.id}
          className={item.id === tabIndex ? "slide-item" : "d-none"}
        >
          <Link to="/list-service">
            <img
              src={item.img}
              alt="slide-img"
              style={{
                width: "876px",
                height: "415px",
                objectFit: "cover",
              }}
            />
          </Link>
        </div>
      ))}
      {/* ======= Slider buttons ======= */}
      <div className="slider-btns">
        <button onClick={handleLeftBtnClick} className="left-btn">
          <VscChevronLeft />
        </button>
        <button onClick={handleRightBtnClick} className="right-btn">
          <VscChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
