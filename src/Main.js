import React from 'react';
import './App.css';
import Login from './Login.js'
import Navigation from './Navigation.js'
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';
import { Nav, Navbar, Container, Col, Row } from 'react-bootstrap';

const Main = () => {
    return (
        <>
            <Container id="main">
                <img class="logo" src="/bold/logo.png"></img>
                <h1 id="title">AI로 보다 똑똑한 상담을!</h1>
                <p id="subtitle">지금 바로 상담 내용을 자동으로 분석하고 정리해주는<br/>똑똑한 AI와 함께, 편리한 콜상담을 경험해보세요.</p>
            </Container>
            <img id="main_bg"src="/bold/main_bg.png"></img>
        </>
    );
}

export default Main;