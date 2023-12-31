import axios from "../axios.js";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../styledComponents";
import InputWithLabel from "../components/InputWithLabel";
import RadioWithLabel from "../components/RadioWithLabel";
import TextareaWithLabel from "../components/TextareaWithLabel";

export default function CustomerInfoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(null);
  const [memo, setMemo] = useState("");

  const [initialData, setInitialData] = useState({
    name: "",
    phone: "",
    birthday: "",
    email: "",
    gender: null,
    memo: ""
  });

  const getCustomerInfo = async () => {
    try {
      const response = await axios.get(`/info/${id}`, {
        withCredentials: true,
      });

      const { message, data } = response.data;
      console.log(response.data);

      setInitialData(data);

      setName(data.name);
      setPhone(data.phone);
      setBirth(data.birthday);
      setEmail(data.email);
      setGender(data.gender);
      setMemo(data.memo);

    } catch (error) {
      console.error('Error fetching customer info:', error);
    }
  };

  useEffect(() => {
    getCustomerInfo();
  }, [id]);

  const resetToInitialValues = () => {
    setName(initialData.name);
    setPhone(initialData.phone);
    setBirth(initialData.birthday);
    setEmail(initialData.email);
    setGender(initialData.gender);
    setMemo(initialData.memo);
  };

  const editCustomerData = () => {
    const updatedCustomerData = {
      name,
      phone,
      birthday: birth,
      email,
      memo
    };

    console.log("updated Customer Data: ", updatedCustomerData);

    const formDataToSend = new FormData();
    formDataToSend.append('name', updatedCustomerData.name);
    formDataToSend.append('phone', updatedCustomerData.phone);
    formDataToSend.append('birthday', updatedCustomerData.birthday);
    formDataToSend.append('email', updatedCustomerData.email);
    formDataToSend.append('memo', updatedCustomerData.memo);

    axios.put(`/info/${id}`, formDataToSend, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: true,
    })
      .then((response) => {
        console.log("User data update successful.", response.data);
      })
      .catch((error) => {
        console.error('Error updating user data', error.response.data.detail);
      });
  }

  return (
    <Container>
      <Title>Customer Info.</Title>
      <Desc>고객정보 확인</Desc>
      <Notice>*표시는 필수입력항목 입니다.</Notice>
      <InputsWrapper>
        <InputWithLabel
          value={name}
          setValue={setName}
          text="고객명"
          placeholder="고객명을 입력해주세요."
          star
          highlight
        />
        <InputWithLabel
          value={phone}
          setValue={setPhone}
          text="전화번호"
          placeholder="전화번호를 입력해주세요."
          star
          highlight
        />
        <InputWithLabel
          value={birth}
          setValue={setBirth}
          text="생년월일"
          placeholder="생년월일 6자리를 입력해주세요. 예) 970503"
        />
        <InputWithLabel
          value={email}
          setValue={setEmail}
          text="이메일주소"
          placeholder="이메일을 입력해주세요."
        />
        <RadioWithLabel text="성별" value={gender} setValue={setGender}  star />
        <TextareaWithLabel
          value={memo}
          setValue={setMemo}
          text="관리메모"
          placeholder="메모를 입력해주세요."
        />
      </InputsWrapper>
      <ButtonsWrapper>
        <Button1 onClick={resetToInitialValues}>
          초기화
        </Button1>
        <Button2 onClick={editCustomerData}>저장하기</Button2>
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
const Notice = styled.p`
  width: 508px;
  margin: 0;
  margin-top: 22.43px;
  margin-bottom: 7.1px;
  color: var(--system-warning, #ff4848);
  font-family: Pretendard;
  font-size: 11.551px;
  font-style: normal;
  font-weight: 400;
  line-height: 15.401px; /* 133.333% */
  letter-spacing: -0.347px;
  text-align: end;
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
