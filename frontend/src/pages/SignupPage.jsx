import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const API_URL = "http://localhost:5000/api/auth"
  
  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        `${API_URL}/signup`, { id, password, nickname },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;

      if(data.success) {
        navigate("/login");
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed");
    }
  }
  
  return (
    <div>
      <h1>회원가입 페이지</h1>
      <form onSubmit={handleSignup}>
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
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Nickname"
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default SignupPage