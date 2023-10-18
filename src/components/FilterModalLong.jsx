import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import closeImg from "../assets/close.svg";
import searchImg from "../assets/search.svg";
import styled from "styled-components";

export default function FilterModalLong({ close, saveAndClose }) {
  const navigate = useNavigate();
  const [selectedDateOrder, setSelectedDateOrder] = useState(0);
  const [selectedNameOrder, setSelectedNameOrder] = useState(0);
  const [selectedConsultTopic, setSelectedConsultTopic] = useState(0);
  const [input, setInput] = useState("");
  return (
    <Bg>
      <Modal>
        <Close src={closeImg} onClick={close} />
        <Title>필터</Title>
        <Content>
        <Text>날짜</Text>
          <SelectButtonsWrapper>
            {selectedDateOrder === 0 ? (
              <ButtonSelected>전체</ButtonSelected>
            ) : (
              <ButtonUnselected
                onClick={() => {
                  setSelectedDateOrder(0);
                }}
              >
                전체
              </ButtonUnselected>
            )}
            {selectedDateOrder === 1 ? (
              <ButtonSelected>오름차순</ButtonSelected>
            ) : (
              <ButtonUnselected
                onClick={() => {
                  setSelectedDateOrder(1);
                }}
              >
                오름차순
              </ButtonUnselected>
            )}
            {selectedDateOrder === 2 ? (
              <ButtonSelected>내림차순</ButtonSelected>
            ) : (
              <ButtonUnselected
                onClick={() => {
                  setSelectedDateOrder(2);
                }}
              >
                내림차순
              </ButtonUnselected>
            )}
          </SelectButtonsWrapper>
          <Text>이름</Text>
          <SelectButtonsWrapper>
            {selectedNameOrder === 0 ? (
              <ButtonSelected>전체</ButtonSelected>
            ) : (
              <ButtonUnselected
                onClick={() => {
                  setSelectedNameOrder(0);
                }}
              >
                전체
              </ButtonUnselected>
            )}
            {selectedNameOrder === 1 ? (
              <ButtonSelected>오름차순</ButtonSelected>
            ) : (
              <ButtonUnselected
                onClick={() => {
                  setSelectedNameOrder(1);
                }}
              >
                오름차순
              </ButtonUnselected>
            )}
            {selectedNameOrder === 2 ? (
              <ButtonSelected>내림차순</ButtonSelected>
            ) : (
              <ButtonUnselected
                onClick={() => {
                  setSelectedNameOrder(2);
                }}
              >
                내림차순
              </ButtonUnselected>
            )}
          </SelectButtonsWrapper>
          <Text>상담내용</Text>
          <SelectButtonsWrapper>
            <Grid>
            {selectedConsultTopic === 0 ? (
              <ButtonSelected>전체</ButtonSelected>
            ) : (
              <ButtonUnselected
                onClick={() => {
                  setSelectedConsultTopic(0);
                }}
              >
                전체
              </ButtonUnselected>
            )}
            {selectedConsultTopic === 1 ? (
              <ButtonSelected>배송위치</ButtonSelected>
            ) : (
              <ButtonUnselected
                onClick={() => {
                  setSelectedConsultTopic(1);
                }}
              >
                배송위치
              </ButtonUnselected>
            )}
            {selectedConsultTopic === 2 ? (
              <ButtonSelected>환불문의</ButtonSelected>
            ) : (
              <ButtonUnselected
                onClick={() => {
                  setSelectedConsultTopic(2);
                }}
              >
                환불문의
              </ButtonUnselected>
            )}
            {selectedConsultTopic === 3 ? (
              <ButtonSelected>반품문의</ButtonSelected>
            ) : (
              <ButtonUnselected
                onClick={() => {
                  setSelectedConsultTopic(3);
                }}
              >
                반품문의
              </ButtonUnselected>
            )}
            {selectedConsultTopic === 4 ? (
              <ButtonSelected>교환문의</ButtonSelected>
            ) : (
              <ButtonUnselected
                onClick={() => {
                  setSelectedConsultTopic(4);
                }}
              >
                교환문의
              </ButtonUnselected>
            )}
            {selectedConsultTopic === 5 ? (
              <ButtonSelected>배송지연</ButtonSelected>
            ) : (
              <ButtonUnselected
                onClick={() => {
                  setSelectedConsultTopic(5);
                }}
              >
                배송지연
              </ButtonUnselected>
            )}
            </Grid>
          </SelectButtonsWrapper>
        </Content>
        <Content>
          <Text>검색</Text>
          <InputWrapper>
            <Input value={input} onChange={(e) => setInput(e.target.value)} />
            <Search src={searchImg} />
          </InputWrapper>
        </Content>
        <ButtonsWrapper>
          <Button1
            onClick={() => {
              setSelectedDateOrder(0);
              setSelectedNameOrder(0);
              setSelectedConsultTopic(0);
              setInput("");
            }}
          >
            초기화
          </Button1>
          <Button2 onClick={saveAndClose}>저장하기</Button2>
        </ButtonsWrapper>
      </Modal>
    </Bg>
  );
}
const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  background: var(--background-50, rgba(34, 34, 34, 0.5));
`;
const Modal = styled.div`
  z-index: 10001;
  width: 318px;
  height: 526px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const Title = styled.p`
  margin: 0;
  margin-bottom: 10px;
  color: var(--neutral-80, #333);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;

  /* Heading/H4 */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 116.667% */
  letter-spacing: -0.72px;
  margin-left: 40px;
  margin-top: 43px;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 35px;
  margin-top: 36px;
`;
const Button1 = styled.button`
  border: none;
  display: flex;
  width: 120px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 0.5px solid var(--primary-100, #372fff);
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
  border: none;
  display: flex;
  width: 120px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 4px;
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
const Close = styled.img`
  cursor: pointer;
  width: 16px;
  height: 18px;
  position: absolute;
  top: 30.39px;
  right: 24px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 25px;
  margin-left: 40px;
`;
const Text = styled.p`
  margin: 0;
  margin-left: 3px;
  color: var(--neutral-60, #4d4d4d);

  /* Body/Body3/Medium */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: -0.48px;
`;
const SelectButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;

  &:nth-child(2), &:nth-child(4) {
    margin-bottom: 24px;
`;
const ButtonSelected = styled.button`
  border: 0;
  display: flex;
  width: 74px;
  padding: 4px 0;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 99px;
  border: 1px solid var(--primary-100, #372fff);
  background: var(--primary-5, #fafaff);
  color: var(--primary-100, #372fff);
  text-align: center;

  /* Body/Body5/Regular */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  letter-spacing: -0.36px;
`;
const ButtonUnselected = styled.button`
  border: 0;
  display: flex;
  width: 74px;
  padding: 4px 0;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 99px;
  border: 1px solid var(--neutral-30, #b3b3b3);
  background: var(--neutral-white, #fff);
  color: var(--neutral-30, #b3b3b3);
  text-align: center;

  /* Body/Body5/Regular */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  letter-spacing: -0.36px;
`;
const InputWrapper = styled.div`
  width: 238px;
  height: 28px;
  border-radius: 25px;
  border: 1px solid #ccc;
  background: #fff;
  display: flex;
  align-items: center;
  margin-top: 8px;
`;
const Input = styled.input`
  font-size: 12px;
  color: #000;
  flex: 1;
  padding-left: 10px;
  border: none;
  background: transparent;
  outline: none;
`;
const Search = styled.img`
  cursor: pointer;
  width: 18px;
  height: 18px;
  margin-right: 9px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;