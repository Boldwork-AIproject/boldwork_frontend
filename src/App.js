import React from 'react';
import './App.css';
import Login from './Login.js'
import Navigation from './Navigation.js'
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';
import { Nav, Navbar, Container, Col, Row } from 'react-bootstrap';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navigation />
      <Container id="main">
        <h1 class="title">AI로 보다 똑똑한 상담을!</h1>
        <p class="subtitle">지금 바로 상담 내용을 자동으로 분석하고 정리해주는
똑똑한 AI와 함께, 편리한 콜상담을 경험해보세요.</p>
      </Container>
                  
      <Routes>
            <Route path="/login" component={Login} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
