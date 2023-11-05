import axios from '../axios.js';
import React, { useState } from "react";
import "../App.css";
import { Form } from 'react-bootstrap';
import styled from "styled-components";
import { PrevNextContainer, ButtonMediumPrimary, ButtonMediumOutline, ButtonSmallOutline } from "../styledComponents";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const [signUpData, setSignUpData] = useState({
        email: "",
        password: "",
        passwordMatch: "",
        name: "",
        phone: "",
        birthday: ""
    });
    
    const [sentVerification, setSentVerification] = useState(false);
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');

    
    // axios post request for sending email verification
    const sendVerificationCode = (email) => {
      console.log(email);
      const requestVerificationUrl = `http://localhost:8000/signup/request-verification?email=${encodeURIComponent(email)}`;
      console.log(requestVerificationUrl);
      const request = axios.post(requestVerificationUrl, null, {
        headers: {
          'Accept': 'application/json',
        },
      });
      return request;
    }

    // axios post request for verifying if code is correct
    const verifyCode = (email, code) => {
      const verifyUrl = '/signup/verify';
      const request = axios.post(verifyUrl, { email, code });
      return request;
    };

    /*
    // verify email by sending code
    const handleEmailVerify = (e) => {
      e.preventDefault();

      sendVerificationCode(email)
      .then((response) => {
        console.log('Verification code sent successfully:', response.data);
        setSentVerification(true);
      })
      .catch((error) => {
        console.error('Error sending verification code:', error);
      });
    }
    */
   const handleEmailVerify = (e) => {
    e.preventDefault();

    console.log(email);
    const requestVerificationUrl = `http://localhost:8000/signup/request-verification?email=${encodeURIComponent(email)}`;
    console.log(requestVerificationUrl);
    axios.post(requestVerificationUrl, null, {
      headers: {
        'Accept': 'application/json',
      },
    }).then((response) => {
        console.log('Email verification sent', response.data);
      })
      .catch((error) => {
        console.error('Error sending verification code', error.response.data);
      });
   }

    // verify if code is correct
    const handleVerifyCode = () => {
      verifyCode(email, code)
        .then((response) => {
          console.log('Code verification successful:', response.data);
        })
        .catch((error) => {
          console.error('Code verification failed:', error);
        });
      console.log(email);
      console.log(code);
    };

    const handleChange = (e) => {
      const { name, value } = e.target;

      setSignUpData((signUpData) => ({ ...signUpData, [name]: value }));

      // for email verification
      if (name === 'email') {
        setEmail(value);
      } else if (name === 'code') {
        setCode(value);
      }
    };
    
    const handleSignUp = async (e) => {
      e.preventDefault();
      console.log('Sign Up Data:', signUpData);

      try {
        const response = await axios.post('/signup', signUpData);
        console.log('Sign Up Successful', response.data);
        //navigate('/complete');
      } catch (error) {
        console.error('Sign Up Failed', error.response.data);
        const warning = "Sign Up Failed. " + error.response.data.detail;
        alert(warning);
      }
    };

    const EmailVerifFormGroup = ({ name, onChange, placeholder }) => {
      return (
      <Form.Group style={{marginTop: '-20px', marginBottom: '40px'}} controlId={name}>
        <div style={{display: 'flex', border: "1px solid var(--neutral-20)", borderRadius: 8, backgroundColor: "white"}}>
          <Form.Control style={{width: "281px", flex: 1, border: "none"}} name={name} onChange={onChange} placeholder={placeholder}></Form.Control>
          {sentVerification === false ? (
          <ButtonSmallOutline style={{width: '90px', height: '32px', borderRadius: 8}} type="button" onClick={handleEmailVerify}>이메일 인증</ButtonSmallOutline>
          ) : (
          <ButtonSmallOutline style={{width: '90px', height: '32px', borderRadius: 8}} type="button" onClick={handleVerifyCode}>확인</ButtonSmallOutline>
          )}
        </div>
      </Form.Group>
      );
    };
    

    return (
            <Container>
                <Title>Sign Up</Title>
                <Desc>회원가입 하기</Desc>
                <Form style={{marginTop: "24px"}}>

                <CustomFormGroup
                  label="이메일"
                  name="email"
                  value={signUpData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="이메일 주소를 입력해주세요."
                />

                <EmailVerifFormGroup
                  name="code"
                  onChange={handleChange}
                  placeholder="인증 코드를 입력해주세요"
                />

                <CustomFormGroup
                  label="비밀번호"
                  name="password"
                  value={signUpData.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="비밀번호를 입력해주세요. (영문,숫자,특수문자 포함 8~20자)"
                />

                <CustomFormGroup
                  label="비밀번호 확인"
                  name="passwordMatch"
                  value={signUpData.passwordMatch}
                  onChange={handleChange}
                  type="password"
                  placeholder="비밀번호를 재입력해주세요."
                />

                <CustomFormGroup
                  label="이름"
                  name="name"
                  value={signUpData.name}
                  onChange={handleChange}
                  placeholder="이름을 입력해주세요."
                />

                <CustomFormGroup
                  label="휴대전화"
                  name="phone"
                  value={signUpData.phone}
                  onChange={handleChange}
                  placeholder="휴대폰번호를 입력해주세요.(‘-’ 제외 1자리 입력)"
                />

                <CustomFormGroup
                  label="생년월일"
                  name="birthday"
                  value={signUpData.birthday}
                  onChange={handleChange}
                  placeholder="생년월일 6자리를 입력해주세요.(예: 970503)"
                />

                </Form>
                <PrevNextContainer>
                    <ButtonMediumOutline style={{fontSize: "var(--body-4)", borderRadius: "4px", marginRight:"5px"}} onClick={() => {navigate(-1)}}>이전으로</ButtonMediumOutline>
                    <ButtonMediumPrimary style={{fontSize: "var(--body-4)", borderRadius: "4px"}} onClick={handleSignUp}>가입하기</ButtonMediumPrimary>
                </PrevNextContainer>
            </Container>
    );
}
const CustomFormGroup = ({ label, name, value, onChange, type, placeholder }) => {
  return (
    <Form.Group style={{ marginBottom: '32px', width: '508px' }} controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control style={{ height: '48px' }} name={name} value={value} onChange={onChange} type={type} placeholder={placeholder} />
    </Form.Group>
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

export default SignUp;