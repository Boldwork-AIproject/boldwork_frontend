import axios from '../axios.js';
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../styledComponents";
import InputWithLabel from "../components/InputWithLabel";
import SaveCompleteModal from "../components/SaveCompleteModal";

export default function MyPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("1111111111");
  const [confirmPassword, setConfirmPassword] = useState("1111111111");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [editable, setEditable] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [userData, setUserData] = useState(null);

  const getUserData = () => {
    axios.get('/mypage/', {
      headers: {
        'Accept': 'application/json',
      },
      withCredentials: true,
    })
      .then((response) => {
        // check response data
        console.log(response.data.data);

        // save user data
        setUserData(response.data.data);
        
        // set specific data variables
        setEmail(response.data.data.email);
        setName(response.data.data.name);
        setPassword(response.data.data.password);
        setConfirmPassword(response.data.data.password);
        setPhone(response.data.data.phone);
        setBirth(response.data.data.birthday);

        console.log("Fetching user data successful.");
      })
      .catch((error) => {
        console.error('Error fetching user data', error.response.data.detail);
      });
  }

  useEffect(() => {
    getUserData();
  }, []);

  const editUserData = () => {
    const updatedUserData = {
      email,
      password,
      name,
      phone,
      birthday: birth,
    };

    console.log("updated User Data: ", updatedUserData);

    const formDataToSend = new FormData();
    formDataToSend.append('email', updatedUserData.email);
    formDataToSend.append('password', updatedUserData.password);
    formDataToSend.append('name', updatedUserData.name);
    formDataToSend.append('phone', updatedUserData.phone);
    formDataToSend.append('birthday', updatedUserData.birthday);

    //todo
    axios.put('/mypage/', formDataToSend, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
    })
      .then((response) => {
        console.log("User data update successful.", response.data);
        setEditable(false);
      })
      .catch((error) => {
        console.error('Error updating user data', error.response.data.detail);
      });
  }

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
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputWithLabel
          value={confirmPassword}
          setValue={setConfirmPassword}
          text="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요."
          highlight={editable}
          nonEdit={!editable}
          password
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <InputWithLabel
          value={name}
          setValue={setName}
          text="이름"
          placeholder="이름을 입력해주세요."
          highlight={editable}
          nonEdit={!editable}
          onChange={(e) => setName(e.target.value)}
        />
        <InputWithLabel
          value={phone}
          setValue={setPhone}
          text="휴대전화"
          placeholder="휴대전화번호를 입력해주세요."
          highlight={editable}
          nonEdit={!editable}
          onChange={(e) => setPhone(e.target.value)}
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
              editUserData();
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
  margin-bottom: 24px;
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
