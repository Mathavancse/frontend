import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../services";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, email, password };
    await register(payload);
    navigate("/"); // redirect to login on success
  };

  // Styles as JS objects
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    padding: 20,
  };

  const formStyle = {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 12,
    maxWidth: 400,
    width: "100%",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  };

  const labelStyle = {
    display: "block",
    margin: "10px 0 5px",
    fontWeight: 600,
  };

  const inputStyle = {
    width: "100%",
    padding: 10,
    border: "1px solid #ddd",
    borderRadius: 8,
    outline: "none",
    fontSize: 14,
    boxSizing: "border-box",
    marginBottom: 10,
  };

  const buttonStyle = {
    width: "100%",
    padding: 12,
    backgroundColor: "#2575fc",
    border: "none",
    color: "white",
    fontSize: 16,
    fontWeight: 600,
    marginTop: 15,
    borderRadius: 8,
    cursor: "pointer",
  };

  const loginLinkStyle = {
    textAlign: "center",
    marginTop: 15,
    fontSize: 14,
    color: "#2575fc",
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h1 style={titleStyle}>Create an Account</h1>

        <label style={labelStyle}>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />

        <button type="submit" style={buttonStyle}>
          Register
        </button>

        <p style={{ textAlign: "center", marginTop: 15, fontSize: 14 }}>
          Already have an account?{" "}
          <Link to="/" style={loginLinkStyle}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
