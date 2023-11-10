import React,{ useState, useEffect } from "react";
import styled from "styled-components";
import image from "../assets/signup-complete.png";
import { useNavigate } from "react-router-dom";
import LoadingBar from "../components/LoadingBar";

export default function Loading() {
/*
아래 주석처리된 부분은 추후 분석페이지 개발 완료시 연결
setTimeout을 이용해 몇 초 머물렀다가 페이지 전환할 수 있음
*/
const navigate = useNavigate();
/* //ignore timer
  useEffect(()=>{
    const timer = setTimeout(()=> {
        navigate("/check")
    }, 1500);

    return()=> clearTimeout(timer);
  }, [navigate]);
*/
  return (
    <Container>
      <Image src={image} />
      <Title>
        <TitleName>상담을 분석중</TitleName>입니다
      </Title>
      <LoadingBar />
    </Container>  
  );
}
const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--background-5, #fafaff);
`;
const Image = styled.img`
  width: 291.933px;
  height: 309.333px;
`;
const Title = styled.p`
  margin: 0;
  color: var(--neutral-100, #030303);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 38.667px;
  font-style: normal;
  font-weight: 700;
  line-height: 46.4px;
  letter-spacing: -1.16px;
  margin-top: 38.67px;
`;
const TitleName = styled.em`
  color: var(--primary-100, #372fff);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 38.667px;
  font-style: normal;
  font-weight: 700;
  line-height: 46.4px; /* 120% */
  letter-spacing: -1.16px;
`;