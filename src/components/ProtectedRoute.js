import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  if (!isAuthenticated) {
    // Chuyển hướng đến trang login nếu người dùng chưa đăng nhập
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
