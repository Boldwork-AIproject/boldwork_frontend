import React from 'react';
import './App.css';
import Navigation from './Navigation.js';
import { Container } from 'react-bootstrap';

function Login() {
    return (
        <>
            <Navigation />
            <Container id="login">
                <h1>환영합니다!</h1>
                <h1><span>로그인</span>을 부탁드려요!</h1>
            </Container>
        </>
    );
}

export default Login;