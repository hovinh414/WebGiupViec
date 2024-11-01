import React, { useEffect } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGlobe,
  faHeadphones,
  faEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleSlider from "./SampleSlider";
import Procedure from "./Procedure";
import sliderHome from "../../image/slider2.jpg";
import appstore from "../../image/appstore.png";
import googlePlay from "../../image/google_play.png";

function Home() {
  // Scroll to the top when the component is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Homep">
      {/* header */}

      {/* slider */}
      <div className="sliderList">
        <img
          src={sliderHome}
          alt="slider trang chu"
          className="sliderItem"
        ></img>
      </div>

      {/* slider service */}
      <div>
        <div className="noti__service">
          <h1>Các tiện ích nổi bật</h1>
        </div>

        <div>
          <SampleSlider />
        </div>
      </div>
      {/* procedure */}
      <Procedure />
      {/* startUse */}
      <div className="startList">
        <div className="startDes">
          <h3 className="startName">Trải nghiệm ngay hôm nay</h3>
          <h3 className="startDescription">
            Bạn đã sẵn sàng sử dụng dịch vụ của We shine chưa? Bắt đầu ngay với
            việc đặt lịch đầu tiên của bạn
          </h3>
        </div>
        <a href="/service" className="startButton">
          Trải nghiệm dịch vụ
        </a>
      </div>
      {/* footer */}
    </div>
  );
}

export default Home;
