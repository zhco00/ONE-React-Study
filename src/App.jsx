import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <div>
        <ul>
          <Link to={"/login"}>
            <li>Login</li>
          </Link>
          <Link to={"/register"}>
            <li>Register</li>
          </Link>
        </ul>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
