import React from "react";
import stepOne from "../../image/step1.jpg";
import stepTwo from "../../image/step2.jpg";
import stepThree from "../../image/step3.jpg";
import stepFour from "../../image/step4.jpg";

function Procedure() {

    return (
        <div className="procedureContainer">
        <div className="procedureTitle">
          <h1>Quy trình sử dụng dịch vụ </h1>
        </div>

        <ul className="procedureList">
          <li className="procedureItem">
            <div className="procedureImg">
            <img src={stepOne} alt="step1"></img>
            </div>
            <div className="procedureDescription">
            <h3 className="stepName">Chọn dịch vụ</h3>
            <h3 className="stepText">Chúng tôi có rất nhiều dịch vụ tiện ích sẵn sàng hỗ trợ bạn</h3>
            </div>
          </li>

          <li className="procedureItem">
            <div className="procedureImg">
            <img src={stepTwo} alt="step1"></img>
            </div>
            <div className="procedureDescription">
            <h3 className="stepName">Chọn thời gian và địa điểm</h3>
            <h3 className="stepText"> Xác định ngày, giờ và địa điểm để đặt dịch vụ bTaskee trong vòng chưa đầy 60 giây. Bạn có thể tùy chọn số lần sử dụng theo nhu cầu.</h3>
            </div>
          </li>

          <li className="procedureItem">
            <div className="procedureImg">
            <img src={stepThree} alt="step1"></img>
            </div>
            <div className="procedureDescription">
            <h3 className="stepName">Tiến hành công việc</h3>
            <h3 className="stepText"> Người giúp việc gia đình/đối tác sẽ xác nhận đến nhà bạn như đã hẹn và thực hiện nhiệm vụ. Chất lượng, sự chuyên nghiệp luôn được đảm bảo 100%.</h3>
            </div>
          </li>

          <li className="procedureItem">
            <div className="procedureImg">
            <img src={stepFour} alt="step1"></img>
            </div>
            <div className="procedureDescription">
            <h3 className="stepName">Đánh giá và xếp hạng</h3>
            <h3 className="stepText"> Bạn có thể đánh giá chất lượng dịch vụ thông qua hệ thống.</h3>
            </div>
          </li>
          
        </ul>
      </div>
    );
  }
  
  export default Procedure;
  
