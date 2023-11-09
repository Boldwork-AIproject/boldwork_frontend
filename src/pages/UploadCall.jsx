import axios from '../axios.js';
import React, { useState } from 'react';
import styled from "styled-components";
import { Container } from "../styledComponents";
import { useNavigate } from 'react-router-dom';
import { ButtonMediumOutline, ButtonMediumPrimary, PrevNextContainer } from "../styledComponents";
import { Form } from "react-bootstrap";

export default function UploadCall() {
  const navigate = useNavigate();

  const [customerData, setCustomerData] = useState({
    name: "",
    phone: "",
    birthday: "",
    email: "",
    gender: "",
    file: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log("Value of textbox: ", value);

    //console.log(`Before update(customerData): ${name} = ${customerData[name]}`);
    setCustomerData((customerData) => ({ ...customerData, [name]: value }));
    //console.log(`After update: ${name} = ${value}`);
  };

  const fileInputRef = React.useRef(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];

    if (uploadedFile) {
      console.log("Selected file:", uploadedFile);
      console.log(uploadedFile.name);
      setSelectedFile(uploadedFile);

      setCustomerData((customerData) => ({ ...customerData, file: uploadedFile }));

      //customerData.file = selectedFile;
      //console.log("Customer Data File: ", customerData.file);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async () => {
    console.log(customerData);
    const formData = new FormData();
    formData.append('name', customerData.name);
    formData.append('phone', customerData.phone);
    formData.append('birthday', customerData.birthday);
    formData.append('email', customerData.email);
    formData.append('gender', customerData.gender);
    formData.append('audio_file', customerData.file);

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
  
      if (response.status === 200) {
        console.log('File uploaded successfully!');
      } else {
        console.error('Failed to upload file.');
      }
    } catch (error) {
      console.error('Error:', error);
    } 
  }

  return (
    <Container>

      <Title>Upload Call</Title>
      <Desc>상담 업로드하기</Desc>
      <Notice>*표시는 필수입력항목 입니다.</Notice>

      <Form>
        <CustomFormGroup controlId="formName" label="고객명" isRequired>
          <Form.Control name="name" style={{ height: "48px" }} onChange={handleChange} placeholder="고객명을 입력해주세요." />
        </CustomFormGroup>

        <CustomFormGroup controlId="formPhone" label="전화번호" isRequired>
          <Form.Control name="phone" style={{ height: "48px" }} onChange={handleChange} placeholder="전화번호를 입력해주세요." />
        </CustomFormGroup>

        <CustomFormGroup controlId="formBirthday" label="생년월일">
          <Form.Control
            name="birthday"
            style={{ height: "48px" }}
            onChange={handleChange} 
            placeholder="생년월일 6자리를 입력해주세요.(예: 970503)"
          />
        </CustomFormGroup>

        <CustomFormGroup controlId="formEmail" label="이메일">
          <Form.Control name="email" style={{ height: "48px" }} type="email" onChange={handleChange} placeholder="이메일을 입력해주세요." />
        </CustomFormGroup>

        <CustomFormGroup controlId="formGender" label="성별" isRequired>
          <Form>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline label="모름" name="gender" type={type} id={`inline-${type}-1`} value="모름" onChange={handleChange} />
                <Form.Check inline label="남" name="gender" type={type} id={`inline-${type}-2`} value="남성" onChange={handleChange} />
                <Form.Check inline label="여" name="gender" type={type} id={`inline-${type}-3`} value="여성" onChange={handleChange} />
              </div>
            ))}
          </Form>
        </CustomFormGroup>

        <CustomFormGroup controlId="formFileUpload" label="첨부 파일" isRequired>
          <div style={InputFieldStyle}>
            <Form.Control name="file" style={{ height: "48px", flex: "1", width: "281px", border: "none" }} placeholder="파일을 업로드해주세요." value={ selectedFile ? selectedFile.name : "" } onChange={handleChange} readOnly />
            <img src="/icons/Link.svg" alt="Link Icon" style={UploadFileButtonStyle} onClick={handleIconClick} />
            <input type="file" accept="audio/*" style={{ display: "none" }} ref={fileInputRef} onChange={handleFileChange} />
          </div>
          <Form.Text style={{ marginTop: "8px" }}>첨부파일은 1개, 300MB까지 등록 가능합니다.</Form.Text>
        </CustomFormGroup>

      </Form>

    <PrevNextContainer style={{marginTop: "8px"}}>
        <ButtonMediumOutline style={{fontSize: "var(--body-4)", borderRadius: "4px", marginRight:"5px"}}>이전으로</ButtonMediumOutline>
        <ButtonMediumPrimary style={{fontSize: "var(--body-4)", borderRadius: "4px"}} onClick={handleSubmit}/*onClick={() => {navigate("/upload/loading");}}*/ >분석하기</ButtonMediumPrimary>
    </PrevNextContainer>

    </Container>
  );
}

const CustomFormGroup = ({ controlId, label, isRequired, children }) => {
  return (
    <Form.Group style={{ marginBottom: "32px", width: "508px" }} controlId={controlId}>
      <Form.Label>
        {label}
        {isRequired && <span style={{ color: "var(--warning)" }}> *</span>}
      </Form.Label>
      {children}
    </Form.Group>
  );
};

const UploadFileButtonStyle = {
  marginLeft: "15px", 
  marginRight: "15px" 
}
const InputFieldStyle = {
  display: 'flex',
  border: "1px solid var(--neutral-20)", 
  borderRadius: 8, 
  backgroundColor: "white",
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