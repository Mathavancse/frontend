import React from "react";
import { useNavigate } from "react-router-dom";

const Protected = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); // redirect to login after logout
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #43cea2, #185a9d)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Welcome to the Protected Page</h1>
      <p>You have successfully logged in.</p>
      <button
        onClick={handleLogout}
        style={{
          marginTop: 20,
          padding: "10px 20px",
          fontSize: 16,
          borderRadius: 6,
          border: "none",
          backgroundColor: "#ff4b5c",
          color: "white",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Protected;
