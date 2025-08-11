import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // ✅ use VITE_ prefix in Vite
  withCredentials: true, // ✅ enables sending cookies with requests
});

export default api;


export const  register =async(payload)=>{
    const res = await api.post("/register/user",payload)
}

export const login =async(payload)=>{
    const res = await api.post ("/login",payload)
    return res
}