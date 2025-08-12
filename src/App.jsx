import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Protected from "./components/Protected";
import Rgister from "./components/Rgister";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Rgister />} />
          <Route path="/protected" element={
            <ProtectedRoute >
            <Protected />
            </ProtectedRoute>} />
        </Routes>
      </Router>
      <h1>hello</h1>
    </>
  );
}

export default App;
