import React from "react";
import "../App.css";
import { ButtonLarge } from "../styledComponents.js";
import { Container } from "react-bootstrap";

import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Container id="main">
        <img class="logo" src="/bold/logo2.png" alt=""></img>
        <h1 id="title">AI로 보다 똑똑한 상담을!</h1>
        <p id="subtitle">
          지금 바로 상담 내용을 자동으로 분석하고 정리해주는
          <br />
          똑똑한 AI와 함께, 편리한 콜상담을 경험해보세요.
        </p>
        <Container id="main_button">
          <ButtonLarge>상담 업로드하기</ButtonLarge>
          <Link to="/test_router" className="ms-5">
            Components 확인
          </Link>
        </Container>
      </Container>
      <div id="main_bg"></div>
    </>
  );
};

export default Main;
