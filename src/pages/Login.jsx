import React from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import { Input, ButtonBlockPrimary, KakaoLabelIcon, NaverLabelIcon } from "../styledComponents"

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

const Login = () => {
  return (
    <>
      <Container id="login" style={loginContainer}>
        <Container id="text" style={textContainer}>
          <h1 style={{fontWeight:"bold"}}>환영합니다!</h1>
          <h1 style={{fontWeight:"bold"}}>
            <span style={{color:"var(--primary-100)"}}>로그인</span>을 부탁드려요!
          </h1>
        </Container>

        <Container id="input_boxes" style={inputContainer}>
          <Input placeholder="이메일을 입력해주세요." />
          <Input placeholder="비밀번호를 입력해주세요."/>
          <ButtonBlockPrimary style={{marginTop: "22px"}}>로그인</ButtonBlockPrimary>
        </Container>

        <p style={{fontSize:"var(--body-4)", marginTop:"24px"}}>
          아직 회원이 아니세요?
          <span style={{color:"var(--primary-100)", marginLeft:"16px", fontWeight:"bold"}}>
            <a href="/signup" style={{textDecoration: "none", color:"var(--primary-100)"}}>회원가입하기</a>
            </span>
        </p> 
        
        <Container id="social_login" style={socialLoginContainer}>
          <Container id="kakao_login" style={logoContainer}>
            <KakaoLabelIcon style={{}} />
            <p style={{fontSize:"var(--body-4)", marginTop:"8px"}}>카카오톡으로 시작</p>
          </Container>
          <Container id="naver_login" style={logoContainer}>
            <NaverLabelIcon />
            <p style={{fontSize:"var(--body-4)", marginTop:"8px"}}>네이버로 시작</p>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Login;
