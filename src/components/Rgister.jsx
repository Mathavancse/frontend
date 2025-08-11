import React from 'react'
import { useState } from 'react';
import {Navigate} from "react-router-dom"
import { Link } from 'react-router-dom';
import { register } from '../services';
import { useNavigate } from "react-router-dom"; // useNavigate is preferred

const Rgister = () => {

    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
      const navigate = useNavigate();


    const handlesubmit =async(e)=>{
        e.preventDefault()
        const payload={
            name,email,password
        }
        const res=await register(payload)  
      navigate("/"); // redirect to login on success
    }


  return (
    <form onSubmit={handlesubmit}>
        <h1>REGISTER</h1>
        <label >name</label>
        <input type='text' onChange={(e)=>setname(e.target.value)}/><br></br>
         <label >Email</label>
        <input type='text' onChange={(e)=>setemail(e.target.value)}/><br/>
            <label >Password</label>
        <input type='text' onChange={(e)=>setpassword(e.target.value)}/>
        <button type='submit'>submit</button>
        {/* <Link to="/"><button>Login</button></Link> */}

    </form>
  )
}

export default Rgister