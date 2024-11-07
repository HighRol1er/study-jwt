import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const DashBoardPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuthenticated) {
      navigate('/')
      alert("로그인하세요")
    }
  },[]);
  return (
    <div>
      <h1>대시보드 페이지 : 로그인 성공!</h1>

      <Link to="/"><button>메인페이지</button></Link>
      <Link to="/login"><button>로그인페이지</button></Link>
      <Link to="/signup"><button>회원가입페이지</button></Link>
    </div>
  )
}

export default DashBoardPage