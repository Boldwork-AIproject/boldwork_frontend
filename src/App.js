import React from 'react';
import './App.css';
import { Nav, Navbar, Container, Col, Row } from 'react-bootstrap';

function App() {
  return (
    <>
     <Navbar>
        <Nav>
          <Navbar.Brand href="#main"><img src="/bold/logo.png" alt="Logo" width="100px" height="31px"></img></Navbar.Brand>
          <Nav.Link href="">AI 상담 분석</Nav.Link>
          <Nav.Link href="">지난 상담 확인</Nav.Link>
          <Nav.Link href="">고객정보 확인</Nav.Link>
          <Nav.Link href="">회원가입</Nav.Link>
          <Nav.Link href="">로그인</Nav.Link>
        </Nav>
      </Navbar>
      <Container id="login">
        <h1>환영합니다!</h1>
        <h1><span>로그인</span>을 부탁드려요!</h1>
      </Container>
    </>
  );
}

export default App;
