import React from 'react';
import './App.css';
import Login from './Login.js'
import { Nav, Navbar, Container, Col, Row } from 'react-bootstrap';

function App() {
  return (
    <>
     <Navbar>
        <Nav>
          <Navbar.Brand href="/"><img src="/bold/logo.png" alt="Logo" width="100px" height="31px"></img></Navbar.Brand>
          <Nav.Link href="upload">AI 상담 분석</Nav.Link>
          <Nav.Link href="check">지난 상담 확인</Nav.Link>
          <Nav.Link href="info">고객정보 확인</Nav.Link>
          <Nav.Link href="signup">회원가입</Nav.Link>
          <Nav.Link href="login">로그인</Nav.Link>
        </Nav>
      </Navbar>
      <Container id="login">
        <h1 class="title">AI로 보다 똑똑한 상담을!</h1>
        <p class="subtitle">지금 바로 상담 내용을 자동으로 분석하고 정리해주는
똑똑한 AI와 함께, 편리한 콜상담을 경험해보세요.</p>
      </Container>
    </>
  );
}

export default App;
