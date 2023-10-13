import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
            <Navbar className="justify-content-center" sticky="top">
                <Nav>
                    <Navbar.Brand as={Link} to="/"><img src="/bold/logo.png" alt="Logo" width="100px" height="31px"></img></Navbar.Brand>
                    <Nav.Link as={Link} to="upload">AI 상담 분석</Nav.Link>
                    <Nav.Link as={Link} to="check">지난 상담 확인</Nav.Link>
                    <Nav.Link as={Link} to="info">고객정보 확인</Nav.Link>
                    <Nav.Link as={Link} to="signup">회원가입</Nav.Link>
                    <Nav.Link>|</Nav.Link>
                    <Nav.Link as={Link} to="login">로그인</Nav.Link>
                </Nav>
            </Navbar>
    );
}

export default Navigation;