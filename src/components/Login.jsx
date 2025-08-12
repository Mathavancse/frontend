import React,{useState} from "react";
import { Link } from "react-router-dom";
import { login as log } from "../services";
import { useNavigate } from "react-router-dom"; // useNavigate is preferred

const login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
        const navigate = useNavigate();
  

  const handlesubmit = async (e) => {
    e.preventDefault()
    const payload = {
      email,
      password,
    };
    const res = await log(payload);
    console.log(res);
    
    localStorage.setItem("token", res?.data);
    navigate("/protected")
  };
  return (
    <>
      login
      <form onSubmit={handlesubmit}>
        <label>emailemailemail</label>
        <input type="text" onChange={(e) => setemail(e.target.value)} />
        <br />
        <label>Password</label>
        <input type="text" onChange={(e) => setpassword(e.target.value)} />
        <button type="submit">submit</button>
      </form>
      <Link to="/register">
        <button>reg</button>
      </Link>
    </>
  );
};

export default login;
