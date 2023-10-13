import React from "react";
import styled from "styled-components";
import callImg from "../assets/call.svg";
import arrowImg from "../assets/arrow.svg";

export default function CheckCallBox({
  name,
  phone,
  time,
  categories,
  onDelete,
  onDetail,
}) {
  return (
    <Container>
      <Image src={callImg} />
      <NameWrapper>
        <Name>{name}</Name>
        <Arrow src={arrowImg} />
      </NameWrapper>
      <Phone>{phone}</Phone>
      <Time>{"상담일시: " + time}</Time>
      <Categories>
        {categories.map((el) => (
          <Category>{el}</Category>
        ))}
      </Categories>
      <ButtonsWrapper>
        <Button1 onClick={onDelete}>삭제하기</Button1>
        <Button2 onClick={onDetail}>상세보기</Button2>
      </ButtonsWrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 323.354px;
  height: 323.354px;
  flex-shrink: 0;
  border-radius: 7.839px;
  border: 0.98px solid var(--neutral-10, #e6e6e6);
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
const NameWrapper = styled.div`
  margin-top: 8.82px;
  display: flex;
  align-items: center;
  position: relative;
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
  margin-top: 7.07px;
  color: var(--primary-100, #372fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 19.597px;
  font-style: normal;
  font-weight: 500;
  line-height: 23.517px; /* 120% */
  letter-spacing: -0.392px;
`;
const Time = styled.p`
  margin: 0;
  margin-top: 3.92px;
  color: var(--secondary-grayscale-grayscale-60, #666);
  text-align: center;
  font-family: Pretendard;
  font-size: 13.718px;
  font-style: normal;
  font-weight: 400;
  line-height: 17.637px; /* 128.571% */
  letter-spacing: -0.412px;
`;
const Categories = styled.div`
  margin-top: 15.32px;
  display: flex;
  gap: 8.01px;
`;
const Category = styled.div`
  display: inline-flex;
  padding: 3.919px 15.678px;
  justify-content: center;
  align-items: center;
  gap: 9.799px;
  border-radius: 97.006px;
  background: var(--neutral-5, #f3f3f3);
  color: var(--neutral-80, #333);
  text-align: center;
  font-family: Pretendard;
  font-size: 11.758px;
  font-style: normal;
  font-weight: 500;
  line-height: 15.678px; /* 133.333% */
  letter-spacing: -0.353px;
`;
const ButtonsWrapper = styled.div`
  margin-top: 23.19px;
  display: flex;
  align-items: center;
  gap: 9.8px;
`;
const Button1 = styled.button`
  display: flex;
  width: 117.583px;
  height: 39.194px;
  padding: 21.557px 19.597px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9.799px;
  flex-shrink: 0;
  border-radius: 3.919px;
  border: 0.49px solid var(--primary-100, #372fff);
  background: var(--primary-5, #fafaff);
  color: var(--primary-100, #372fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 13.718px;
  font-style: normal;
  font-weight: 500;
  line-height: 17.637px; /* 128.571% */
  letter-spacing: -0.412px;
`;
const Button2 = styled.button`
  display: flex;
  width: 117.583px;
  height: 39.194px;
  padding: 21.557px 19.597px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9.799px;
  flex-shrink: 0;
  border-radius: 3.919px;
  border: 0.49px solid var(--primary-100, #372fff);
  background: var(--primary-100, #372fff);
  color: var(--neutral-white, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 13.718px;
  font-style: normal;
  font-weight: 500;
  line-height: 17.637px; /* 128.571% */
  letter-spacing: -0.412px;
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
