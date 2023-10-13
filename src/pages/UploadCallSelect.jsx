import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function UploadCallSelect() {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>Upload Call</Title>
      <Desc>상담 업로드하기</Desc>
      <ButtonsWrapper>
        <Button
          onClick={() => {
            navigate("/upload-call/new");
          }}
        >
          <ButtonTitle>
            신규 고객
            <br />
            New Customer
          </ButtonTitle>
          <ButtonDesc>
            고객 정보를 입력하고 나서 상담 기록 업로드하기
          </ButtonDesc>
        </Button>
        <Button
          onClick={() => {
            navigate("/upload-call");
          }}
        >
          <ButtonTitle>
            기존 고객
            <br />
            Existing Customer
          </ButtonTitle>
          <ButtonDesc>
            이미 가입된 고객정보를 조회하고 상담 기록 업로드하기
          </ButtonDesc>
        </Button>
      </ButtonsWrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: var(--background-5, #fafaff);
`;
const Title = styled.p`
  margin: 0;
  margin-top: 80px;
  color: var(--neutral-100, #030303);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;

  /* Title */
  font-family: TypoPRO Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 116.667% */
  letter-spacing: -0.72px;
`;
const Desc = styled.p`
  margin: 0;
  margin-top: 16px;
  margin-bottom: 80px;
  color: var(--neutral-80, #333);
  text-align: center;

  /* Body/Body4/Medium */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.42px;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 81px;
  margin-bottom: 215px;
`;
const Button = styled.button`
  width: 549px;
  height: 507px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #372fff;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonTitle = styled.p`
  margin: 0;
  margin-top: 181px;
  color: var(--neutral-100, #030303);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;

  /* Heading/H1 */
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 120% */
  letter-spacing: -1.2px;
`;
const ButtonDesc = styled.p`
  margin: 0;
  margin-top: 120px;
  color: var(--neutral-70, #4d4d4d);
  text-align: center;

  /* Body/Body1/Bold */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
  letter-spacing: -0.6px;
`;
