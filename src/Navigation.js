import React from 'react';
import {Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar>
            <Nav>
                <Navbar.Brand as={Link} to="/"><img src="/bold/logo.png" alt="Logo" width="100px" height="31px"></img></Navbar.Brand>
                <Nav.Link>AI 상담 분석</Nav.Link>
                <Nav.Link>지난 상담 확인</Nav.Link>
                <Nav.Link>고객정보 확인</Nav.Link>
                <Nav.Link>회원가입</Nav.Link>
                <Nav.Link as={Link} to="/login">로그인</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation;