import React, { useEffect, useState } from "react";
import { Select, Input, Button, message } from "antd";
import { getAllServices } from "../../services/serviceService";
import { registerStaff } from "../../services/authService";

const onSearch = (value) => {
  console.log("search:", value);
};

function Employee() {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    age: "",
    serviceIds: [],
    address: "",
    agreeToContact: false,
    cvFile: null, // Lưu file CV tải lên
  });

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getAllServices(1, 50);
      setServices(
        data.services.map((service) => ({
          value: service._id,
          label: service.serviceName,
        }))
      );
    };
    fetchServices();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value, fieldName) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      agreeToContact: e.target.checked,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
    ];

    if (file && allowedTypes.includes(file.type)) {
      setFormData((prevData) => ({
        ...prevData,
        cvFile: file,
      }));
    } else {
      message.error("Chỉ chấp nhận các file pdf, doc, docx, jpg, jpeg, png.");
    }
  };

  const handleRegister = async () => {
    const { fullname, phone, email, age, serviceIds, address, cvFile } =
      formData;

    if (
      !fullname ||
      !phone ||
      !email ||
      !age ||
      serviceIds.length === 0 ||
      !address
    ) {
      message.error("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", fullname);
    formDataToSend.append("phone", phone);
    formDataToSend.append("email", email);
    formDataToSend.append("age", age);
    formDataToSend.append("address", address);
    formDataToSend.append("cv", cvFile);
    serviceIds.forEach((id) => formDataToSend.append("serviceIds", id));

    try {
      const response = await registerStaff(formDataToSend);

      if (response.success) {
        message.success("Đăng ký thành công. Vui lòng chờ duyệt.");
        setFormData({
          fullname: "",
          phone: "",
          email: "",
          age: "",
          serviceIds: [],
          address: "",
          agreeToContact: false,
          cvFile: null,
        });
      } else {
        message.error(response.message || "Đăng ký thất bại.");
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("Đăng ký thất bại.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: "50px 20px", // Margin bên ngoài
      }}
    >
      {/* Phần text bên trái */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          marginRight: "40px",
          maxWidth: "500px",
        }}
      >
        <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#ff6f3c" }}>
          Thu nhập nhiều hơn.
        </h1>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#ff6f3c",
            marginBottom: "20px",
          }}
        >
          Cuộc sống tốt hơn.
        </h1>
        <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6" }}>
          Giờ đây, bạn không chỉ dễ dàng kiếm tiền từ việc là đối tác giúp việc
          của We Shine, mà còn chủ động về thời gian của bạn để cải thiện chất
          lượng cuộc sống.
        </p>
        <p
          style={{
            fontSize: "18px",
            color: "#555",
            lineHeight: "1.6",
            marginTop: "20px",
          }}
        >
          Chúng tôi luôn tìm kiếm những người có đam mê và cam kết giúp đỡ người
          khác để tham gia vào đội ngũ của mình.
        </p>
      </div>

      {/* Form bên phải */}
      <div
        style={{
          flex: 1,
          maxWidth: "450px", // Thu nhỏ chiều rộng của form
          padding: "30px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#ff6f3c",
            marginBottom: "20px",
          }}
        >
          Đăng ký trở thành đối tác
        </h2>
        <label>Họ tên</label>
        <Input
          name="fullname"
          style={{ marginBottom: "15px", borderRadius: "4px", height: "40px" }}
          placeholder="Nhập họ tên"
          value={formData.fullname}
          onChange={handleInputChange}
        />
        <label>Số điện thoại</label>
        <Input
          name="phone"
          style={{ marginBottom: "15px", borderRadius: "4px", height: "40px" }}
          placeholder="Nhập số điện thoại"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <label>Email</label>
        <Input
          name="email"
          style={{ marginBottom: "15px", borderRadius: "4px", height: "40px" }}
          placeholder="Nhập email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <label>Tuổi</label>
        <Input
          name="age"
          style={{ marginBottom: "15px", borderRadius: "4px", height: "40px" }}
          placeholder="Nhập tuổi"
          value={formData.age}
          onChange={handleInputChange}
        />
        <label>Dịch vụ đăng ký</label>
        <Select
          mode="multiple"
          placeholder="Chọn dịch vụ"
          options={services}
          style={{ width: "100%", marginBottom: "15px" }} // Giữ chiều cao mặc định của Select
          value={formData.serviceIds}
          onChange={(value) => handleSelectChange(value, "serviceIds")}
        />
        <label>Thành phố đăng ký</label>
        <Select
          showSearch
          placeholder="Chọn thành phố"
          style={{ width: "100%", marginBottom: "15px", height: "40px" }}
          options={[
            { value: "Hà Nội", label: "Hà Nội" },
            { value: "Đà Nẵng", label: "Đà Nẵng" },
            { value: "Thành phố Hồ Chí Minh", label: "Thành phố Hồ Chí Minh" },
          ]}
          value={formData.address}
          onChange={(value) => handleSelectChange(value, "address")}
        />
        <label>Upload CV</label>
        <Input
          type="file"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          onChange={handleFileChange}
          style={{ marginBottom: "15px", borderRadius: "4px", height: "40px" }}
        />
        <div style={{ margin: "15px 0" }}>
          <input
            type="checkbox"
            checked={formData.agreeToContact}
            onChange={handleCheckboxChange}
            style={{ marginRight: "10px" }}
          />
          <span style={{ fontSize: "14px", color: "#555" }}>
            Tôi đồng ý việc đại diện từ We Shine liên lạc với tôi thông qua số
            điện thoại mà tôi đăng ký.
          </span>
        </div>
        <Button
          type="primary"
          style={{
            width: "100%",
            height: "45px",
            backgroundColor: "#ff6f3c",
            borderColor: "#ff6f3c",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "6px",
          }}
          onClick={handleRegister}
        >
          Đăng ký nhận việc
        </Button>
      </div>
    </div>
  );
}

export default Employee;
