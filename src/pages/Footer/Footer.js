import {
    faFacebookF,
    faInstagram,
    faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import {
    faEnvelope,
    faGlobe,
    faHeadphones
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import appstore from "../../image/appstore.png";
import googlePlay from "../../image/google_play.png";
import "./index.css";


const Footer = props => {
    return (
        <footer id="footer">
        <div className="footerContent">
          <div className="footerLogo">
            <h3 className="footerLogoName">We shine</h3>
            <div className="footerLogoApp">
              <img src={appstore} alt="appstore"></img>
              <img
                src={googlePlay}
                alt="googleplay"
                className="footerLogoAppItem"
              ></img>
            </div>
            <ul className="footerLogoList">
              <li className="footerLogoItem">
                <div className="footerLogoItemBlock">
                  <ul className="footerLogoItemContact">
                    <li className="footerLogoItemContactDetail">
                      <FontAwesomeIcon icon={faGlobe} className="icon-item" />
                      <h4 className="footerLogoItemContactDetailText">
                        Việt Nam
                      </h4>
                    </li>
                    <li className="footerLogoItemContactDetail">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="icon-item"
                      />
                      <h4 className="footerLogoItemContactDetailText">
                        Liên hệ
                      </h4>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="footerLogoItem">
                <div className="footerLogoItemBlock">
                  <ul className="footerLogoItemContact">
                    <li className="footerLogoItemContactDetail">
                      <FontAwesomeIcon
                        icon={faHeadphones}
                        className="icon-item"
                      />
                      <h4 className="footerLogoItemContactDetailText">
                        Hỗ trợ
                      </h4>
                    </li>
                    <li className="footerLogoItemContactDetail">
                      <FontAwesomeIcon icon={faComment} className="icon-item" />
                      <h4 className="footerLogoItemContactDetailText">
                        Khiếu nại
                      </h4>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="footerContainer">
            <h3 className="footerContainerName">Công ty</h3>
            <ul className="footerAboutlist">
              <li className="footerAboutItem">Giới thiệu</li>
              <li className="footerAboutItem">Tuyển dụng</li>
              <li className="footerAboutItem">Chi nhánh</li>
              <li className="footerAboutItem">Điều khoản sử dụng</li>
              <li className="footerAboutItem">Chính sách bảo mật</li>
            </ul>
          </div>
          <div className="footerContainer">
            <h3 className="footerContainerName">Dịch vụ</h3>
            <ul className="footerAboutlist">
              <li className="footerAboutItem">Giúp việc nhà theo giờ </li>
              <li className="footerAboutItem">Vệ sinh điều hòa</li>
              <li className="footerAboutItem">Tổng vệ sinh</li>
              <li className="footerAboutItem">Vệ sinh sofa</li>
              <li className="footerAboutItem">Nấu ăn</li>
              <li className="footerAboutItem">Giặt ủi</li>
              <li className="footerAboutItem">Đi chợ</li>
            </ul>
          </div>
        </div>
        <div className="socialsCopyright">
          <p className="copyright">WE SHINE TOGETHER.</p>
          <p className="copyright">FOLLOW US</p>
          <div className="socials-list">
            <FontAwesomeIcon icon={faFacebookF} className="icon-item" />
            <FontAwesomeIcon icon={faInstagram} className="icon-item" />
            <FontAwesomeIcon icon={faTiktok} className="icon-item" />
          </div>
        </div>
      </footer>
    );
};

Footer.propTypes = {
    
};

export default Footer;