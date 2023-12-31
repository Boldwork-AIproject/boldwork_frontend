import Cookies from 'js-cookie';
import axios from '../axios.js';
import React, { useState } from "react";
import "../App.css";
import { Container, Form } from "react-bootstrap";
import { ButtonBlockPrimary, NaverLabelIcon } from "../styledComponents"
import { Link, useNavigate } from 'react-router-dom';
import KakaoLogin from "./SocialLoginKakao";
import NaverLogin from "./SocialLoginNaver";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
      username: '',
      password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((loginData) => ({ ...loginData, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('username', loginData.username);
    formDataToSend.append('password', loginData.password);

    console.log('Login Data:', loginData);

    axios.post('/login', formDataToSend)
      .then((response) => {
        console.log('Login successful', response.data);
        // saves cookie via front end
        const accessToken = response.data.access_token;
        Cookies.set('access_token', accessToken, { expires: 7 }); // Expires in 7 days
        // sets logged in state in App.js
        onLogin();
        navigate("/");
      })
      .catch((error) => {
        console.error('Login failed', error.response.data);
        const warning = "Login Failed. " + error.response.data.detail;
        alert(warning);
      });
  };
  
  return (
    <>
      <Container id="login" style={loginContainer}>
        <Container id="text" style={textContainer}>
          <h1>환영합니다!</h1>
          <h1>
            <span style={{color:"var(--primary-100)"}}>로그인</span>을 부탁드려요!
          </h1>
        </Container>

        <Container id="input_boxes" style={inputContainer}>
          <Form onSubmit={handleLogin}>
          <Form.Group style={{marginBottom: "16px", width: "508px"}} controlId="formEmail">
              <Form.Control style={{height: "48px"}} name="username" value={loginData.username} onChange={handleChange} type="email" placeholder="이메일을 입력해주세요." />
          </Form.Group>
          <Form.Group style={{width: "508px"}} controlId="formPass">
              <Form.Control style={{height: "48px"}} name="password" value={loginData.password} onChange={handleChange} type="password" placeholder="비밀번호를 입력해주세요." />
          </Form.Group>
          <ButtonBlockPrimary type="submit" style={{marginTop: "32px"}}>로그인</ButtonBlockPrimary>
          </Form>
        </Container>

        <p style={{fontSize:"var(--body-4)", marginTop:"24px"}}>
          아직 회원이 아니세요?
          <span style={{color:"var(--primary-100)", marginLeft:"16px", fontWeight:"bold"}}>
            <Link to="/signup" style={{textDecoration: "none", color:"var(--primary-100)"}}>회원가입하기</Link>
            </span>
        </p> 
        
        <Container id="social_login" style={socialLoginContainer}>
          
          <Link to="/kakao-login" style={{textDecoration: "none", color:"inherit"}}>
          <Container id="kakao_login" style={logoContainer}>
            <KakaoLogin />
            <p style={{fontSize:"var(--body-4)", marginTop:"8px"}}>카카오톡으로 시작</p>
          </Container>
          </Link>

          <Link to="/naver-login" style={{textDecoration: "none", color:"inherit"}}>
            <Container id="naver_login" style={logoContainer}>
              <NaverLogin />
              <p style={{fontSize:"var(--body-4)", marginTop:"8px"}}>네이버로 시작</p>
            </Container>
          </Link>

        </Container>
      </Container>
    </>
  );
};
const loginContainer = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -45%)",
  textAlign: "center"
}

const textContainer = {
  marginTop: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems:"center",
  textAlign: "center",
}

const inputContainer = {
  marginTop: "66px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center"
}

const socialLoginContainer = {
  width: "195px",
  marginTop: "45px",
  display: "flex",
  justifyContent:"center",
  alignItems: "center",
  textAlign: "center"
}

const logoContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap"
}

export default Login;
