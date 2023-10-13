import React from "react";
import styled from "styled-components";
import profileImg from "../assets/profile.svg";

export default function CustomerInfoBox({ name, phone, onDelete, onDetail }) {
  return (
    <Container>
      <Left>
        <Image src={profileImg} />
        <TextsWrapper>
          <Name>{name}</Name>
          <Phone>{phone}</Phone>
        </TextsWrapper>
      </Left>
      <ButtonsWrapper>
        <Button2 onClick={onDetail}>상세보기</Button2>
        <Button1 onClick={onDelete}>삭제하기</Button1>
      </ButtonsWrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 686px;
  height: 137px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--neutral-10, #e6e6e6);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 40px;
`;
const Image = styled.img`
  display: flex;
  width: 62.711px;
  height: 62.711px;
  padding: 5.057px 4.073px 4.066px 4.046px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
const TextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;
const Name = styled.p`
  margin: 0;
  color: #000;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 31.356px;
  font-style: normal;
  font-weight: 700;
  line-height: 37.235px; /* 118.75% */
  letter-spacing: -0.941px;
`;
const Phone = styled.p`
  margin: 0;
  color: var(--primary-100, #372fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 19.597px;
  font-style: normal;
  font-weight: 500;
  line-height: 23.517px; /* 120% */
  letter-spacing: -0.392px;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-right: 34px;
`;
const Button1 = styled.button`
  display: flex;
  width: 120px;
  height: 40px;
  padding: 22px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 3.919px;
  border: 0.49px solid var(--primary-100, #372fff);
  background: var(--primary-5, #fafaff);
  color: var(--primary-100, #372fff);
  text-align: center;

  /* Body/Body4/Medium */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.42px;
`;
const Button2 = styled.button`
  display: flex;
  width: 120px;
  height: 40px;
  padding: 22px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 3.919px;
  border: 0.49px solid var(--primary-100, #372fff);
  background: var(--primary-100, #372fff);
  color: var(--neutral-white, #fff);
  text-align: center;

  /* Body/Body4/Medium */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.42px;
`;
const Arrow = styled.img`
  display: flex;
  width: 17.637px;
  height: 17.637px;
  padding: 1.96px 4.899px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: absolute;
  right: -33.667px;
`;
