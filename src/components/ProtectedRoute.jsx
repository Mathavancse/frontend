// components/ProtectedRoute.jsx
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem('token');

//   if (!token) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;

// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/" />;
  }

  try {
    const decoded = jwtDecode(token);
    console.log("Decoded Token:", decoded);
    console.log("Expiration Time:", decoded.exp);
    console.log("Current Time:", Date.now() / 1000);
    
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      // Token expired
      localStorage.removeItem('token');
      return <Navigate to="/" />;
    }

    return children;
  } catch (err) {
    // Invalid token
    localStorage.removeItem('token');
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
