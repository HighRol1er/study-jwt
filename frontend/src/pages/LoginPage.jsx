import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const API_URL = "http://localhost:5000/api/auth"

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_URL}/login`,{ id,password }, { withCredentials: true } // withCredentials 이거 설정해주니깐 cookie에 token 보이네 holy shit
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // }
      );
      const data = response.data;
      console.log(data)
      if (data.success) {
        login(data.token);
        navigate("/dashboard");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed");
    }
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h1>로그인 페이지</h1>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage