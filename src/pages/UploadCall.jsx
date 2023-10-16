import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { ButtonMediumOutline, ButtonMediumPrimary, PrevNextContainer } from "../styledComponents";
import { Form } from "react-bootstrap";

export default function UploadCall() {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>Upload Call</Title>
      <Desc>상담 업로드하기</Desc>
      <Notice>*표시는 필수입력항목 입니다.</Notice>
      <Form>
        <Form.Group style={{marginBottom: "32px", width: "508px"}} controlId="formName">
            <Form.Label>고객명<span style={{color: "var(--warning)"}}> *</span></Form.Label>
            <Form.Control style={{height: "48px"}} placeholder="고객명을 입력해주세요." />
        </Form.Group>
        <Form.Group style={{marginBottom: "32px", width: "508px"}} controlId="formPhone">
            <Form.Label>전화번호<span style={{color: "var(--warning)"}}> *</span></Form.Label>
            <Form.Control style={{height: "48px"}} placeholder="전화번호를 입력해주세요." />
        </Form.Group>
        <Form.Group style={{marginBottom: "32px", width: "508px"}} controlId="formBirthday">
            <Form.Label>생년월일</Form.Label>
            <Form.Control style={{height: "48px"}} placeholder="생년월일 6자리를 입력해주세요.(예: 970503)" />
        </Form.Group>
        <Form.Group style={{marginBottom: "32px", width: "508px"}} controlId="formEmail">
            <Form.Label>이메일</Form.Label>
            <Form.Control style={{height: "48px"}} type="email" placeholder="이메일을 입력해주세요." />
        </Form.Group>
        <Form.Group style={{marginBottom: "32px", width: "508px"}} controlId="formID">
            <Form.Label>성별<span style={{color: "var(--warning)"}}> *</span></Form.Label>
            <Form>
                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                    <Form.Check inline label="모름" name="group1" type={type} id={`inline-${type}-1`} />
                    <Form.Check inline label="남" name="group1" type={type} id={`inline-${type}-2`} />
                    <Form.Check inline label="여" name="group1" type={type} id={`inline-${type}-3`} />
                    </div>
                ))}
            </Form>
        </Form.Group>
        <Form.Group style={{width: "508px"}} controlId="formPassCheck">
            <Form.Label>첨부 파일<span style={{color: "var(--warning)"}}> *</span></Form.Label>
            <Form.Control style={{height: "48px"}} placeholder="파일을 업로드해주세요." />
            <Form.Text style={{marginTop: "8px"}}>첨부파일은 1개, 300MB까지 등록 가능합니다.</Form.Text>
        </Form.Group>
    </Form>
    <PrevNextContainer style={{marginTop: "40px"}}>
        <ButtonMediumOutline style={{fontSize: "var(--body-4)", borderRadius: "4px", marginRight:"5px"}}>이전으로</ButtonMediumOutline>
        <ButtonMediumPrimary style={{fontSize: "var(--body-4)", borderRadius: "4px"}} onClick={() => {navigate("/upload/analysis");}}>분석하기</ButtonMediumPrimary>
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