import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const MainPage = () => {
  return (
    <div>
      <Link to="/login">
        <button>로그인페이지</button>
      </Link>
      <Link to="/signup">
        <button>회원가입페이지</button>
      </Link>
      <Link to="/dashboard">
        <button>대시보드페이지</button>
      </Link>
    </div>
  )
}

export default MainPage