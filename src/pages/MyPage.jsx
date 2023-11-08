import axios from '../axios.js';
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../styledComponents";
import InputWithLabel from "../components/InputWithLabel";
import SaveCompleteModal from "../components/SaveCompleteModal";

export default function MyPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("id1234");
  const [password, setPassword] = useState("11111111");
  const [confirmPassword, setConfirmPassword] = useState("11111111");
  const [name, setName] = useState("김철수");
  const [phone, setPhone] = useState("0123456789");
  const [birth, setBirth] = useState("970503");
  const [editable, setEditable] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [userData, setUserData] = useState(null);

  const getUserData = () => {
    // Fetch user data from your FastAPI endpoint
    axios.get('http://localhost:8000/mypage', {
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((response) => {
        console.log(response.data.data);
        /*
        const { data } = response;
        if (data.data) {
          setUserData(data.data);
        }
        */
      })
      .catch((error) => {
        console.error('Error fetching user data', error);
      });
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Container>
      {showModal ? <SaveCompleteModal /> : null}
      <Title>My Page</Title>
      <Desc>마이페이지</Desc>
      <InputsWrapper>
        <InputWithLabel
          value={email}
          setValue={setEmail}
          text="이메일"
          placeholder="이메일을 입력해주세요."
          nonEdit
        />
        <InputWithLabel
          value={password}
          setValue={setPassword}
          text="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          highlight={editable}
          nonEdit={!editable}
          password
        />
        <InputWithLabel
          value={confirmPassword}
          setValue={setConfirmPassword}
          text="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요."
          highlight={editable}
          nonEdit={!editable}
          password
        />
        <InputWithLabel
          value={name}
          setValue={setName}
          text="이름"
          placeholder="이름을 입력해주세요."
          highlight={editable}
          nonEdit={!editable}
        />
        <InputWithLabel
          value={phone}
          setValue={setPhone}
          text="휴대전화"
          placeholder="휴대전화번호를 입력해주세요."
          highlight={editable}
          nonEdit={!editable}
        />
        <InputWithLabel
          value={birth}
          setValue={setBirth}
          text="생년월일"
          placeholder="생년월일을 입력해주세요."
          nonEdit
        />
      </InputsWrapper>
      <ButtonsWrapper>
        <Button1
          onClick={() => {
            navigate(-1);
          }}
        >
          이전으로
        </Button1>
        {editable ? (
          <Button2
            onClick={() => {
              setShowModal(true);
            }}
          >
            저장하기
          </Button2>
        ) : (
          <Button2
            onClick={() => {
              setEditable(true);
            }}
          >
            수정하기
          </Button2>
        )}
      </ButtonsWrapper>
    </Container>
  );
}
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
const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const ButtonsWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 10px;
  margin-bottom: 80px;
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
