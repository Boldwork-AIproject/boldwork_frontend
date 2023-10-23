import React from "react";
import "../App.css";
import { Form } from 'react-bootstrap';
import styled from "styled-components";
import { PrevNextContainer, ButtonMediumPrimary, ButtonMediumOutline } from "../styledComponents";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    return (
            <Container>
                <Title>Sign Up</Title>
                <Desc>회원가입 하기</Desc>
                <Form style={{marginTop: "24px"}}>
                    <Form.Group style={{marginBottom: "32px", width: "508px"}} controlId="formID">
                        <Form.Label>아이디</Form.Label>
                        <Form.Control style={{height: "48px"}} placeholder="아이디를 입력해주세요 (영문,숫자 포함 8~20자)" />
                    </Form.Group>
                    <Form.Group style={{marginBottom: "32px", width: "508px"}} controlId="formPass">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control style={{height: "48px"}} type="password" placeholder="비밀번호를 입력해주세요. (영문,숫자,특수문자 포함 8~20자)" />
                    </Form.Group>
                    <Form.Group style={{marginBottom: "32px", width: "508px"}} controlId="formPassCheck">
                        <Form.Label>비밀번호 확인</Form.Label>
                        <Form.Control style={{height: "48px"}} type="password" placeholder="비밀번호를 재입력해주세요." />
                    </Form.Group>
                    <Form.Group style={{marginBottom: "32px", width: "508px"}} controlId="formName">
                        <Form.Label>이름</Form.Label>
                        <Form.Control style={{height: "48px"}} placeholder="이름을 입력해주세요." />
                    </Form.Group>
                    <Form.Group style={{marginBottom: "32px", width: "508px"}} controlId="formPhone">
                        <Form.Label>휴대전화</Form.Label>
                        <Form.Control style={{height: "48px"}} placeholder="휴대폰번호를 입력해주세요.(‘-’ 제외 1자리 입력)" />
                    </Form.Group>
                    <Form.Group style={{marginBottom: "32px", width: "508px"}} controlId="formBirthday">
                        <Form.Label>생년월일</Form.Label>
                        <Form.Control style={{height: "48px"}} placeholder="생년월일 6자리를 입력해주세요.(예: 970503)" />
                    </Form.Group>
                    <Form.Group style={{width: "508px"}} controlId="formEmail">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control style={{height: "48px"}} type="email" placeholder="이메일 주소를 입력해주세요." />
                    </Form.Group>
                </Form>
                <PrevNextContainer style={{marginTop: "40px"}}>
                    <ButtonMediumOutline style={{fontSize: "var(--body-4)", borderRadius: "4px", marginRight:"5px"}} onClick={() => {navigate(-1)}}>이전으로</ButtonMediumOutline>
                    <ButtonMediumPrimary style={{fontSize: "var(--body-4)", borderRadius: "4px"}} onClick={() => {navigate('/complete');}}>가입하기</ButtonMediumPrimary>
                </PrevNextContainer>
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