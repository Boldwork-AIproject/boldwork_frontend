import axios from '../axios.js';
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../styledComponents";
import image from "../assets/signup-complete.png";
import { useNavigate, useLocation } from "react-router-dom";
export default function SignupComplete() {
  const navigate = useNavigate();

  const location = useLocation();
  const userName = location.state.userName;

  /*
  const [consultantName, setConsultantName] = useState('');

   // GET request if /signup/complete brought back name of consultant
  useEffect(() => {
    // Fetch user data from your FastAPI endpoint
    axios.get('/complete')
      .then((response) => {
        console.log("Retrieved user data: ", response.data);
        const { data } = response;
        if (data.data) {
          setConsultantName(data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching user data', error);
      });
  }, []);
  */

  return (
    <Container style= {{justifyContent: 'center'}}>
      <Image src={image} />
      <Title>
        <TitleName>{userName}</TitleName>님, 환영합니다!
      </Title>
      <Desc>
        지금 바로 상담 내용을 자동으로 분석하고 정리해주는
        <br />
        똑똑한 AI와 함께, <DescBold>편리한 콜상담을 경험해보세요.</DescBold>
      </Desc>
      <Button
        onClick={() => {
          navigate("/login");
        }}
      >
        서비스 이용하기
      </Button>
    </Container>
  );
}
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
const Desc = styled.p`
  margin: 0;
  color: var(--neutral-100, #030303);
  text-align: center;
  font-family: Pretendard;
  font-size: 15.467px;
  font-style: normal;
  font-weight: 400;
  line-height: 23.2px; /* 150% */
  letter-spacing: -0.464px;
  margin-top: 22.6px;
`;
const DescBold = styled.em`
  color: var(--neutral-100, #030303);
  font-family: Pretendard;
  font-size: 15.467px;
  font-style: normal;
  font-weight: 700;
  line-height: 23.2px;
  letter-spacing: -0.464px;
`;
const Button = styled.button`
  border: none;
  margin-top: 61.27px;
  display: flex;
  width: 491.067px;
  height: 54.133px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9.667px;
  flex-shrink: 0;
  border-radius: 7.733px;
  background: var(--primary-100, #372fff);
  color: var(--neutral-white, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 15.467px;
  font-style: normal;
  font-weight: 700;
  line-height: 19.333px; /* 125% */
  letter-spacing: -0.464px;
`;
