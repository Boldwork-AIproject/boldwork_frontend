import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputWithLabel from "../components/InputWithLabel";

export default function UploadCallNew() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const data = [
    { name: "권준수", phone: "010-2904-4985", email: "gwonjoonsoo@naver.com" },
    { name: "권준수", phone: "010-3422-0099", email: "gwonjoonsoo@gmail.com" },
    { name: "권준수", phone: "010-2904-4985", email: "gwonjoonsoo@naver.com" },
    { name: "권준수", phone: "010-3422-0099", email: "gwonjoonsoo@gmail.com" },
    { name: "권준수", phone: "010-2904-4985", email: "gwonjoonsoo@naver.com" },
    { name: "권준수", phone: "010-3422-0099", email: "gwonjoonsoo@gmail.com" },
  ];
  return (
    <Container>
      <Title>Upload Call</Title>
      <Desc>상담 업로드하기</Desc>
      <InputsWrapper>
        <InputWithLabel
          value={name}
          setValue={setName}
          text="고객명"
          placeholder="고객명을 입력해주세요."
        />
        <InputWithLabel
          value={phone}
          setValue={setPhone}
          text="전화번호"
          placeholder="전화번호를 입력해주세요."
        />
      </InputsWrapper>
      <MiddleButtonsWrapper>
        <GrayButton
          onClick={() => {
            navigate("/upload-call");
          }}
        >
          돌아가기
        </GrayButton>
        <GrayButton
          onClick={() => {
            setShowSearch(true);
          }}
        >
          검색하기
        </GrayButton>
      </MiddleButtonsWrapper>
      {showSearch ? (
        <Search>
          <Box>
            {data.map((el, idx) => (
              <BoxContentWrapper>
                <BoxContent>
                  <BoxName>{el.name}</BoxName>
                  <BoxPhone>{el.phone}</BoxPhone>
                  <BoxEmail>{el.email}</BoxEmail>
                </BoxContent>
                {idx !== data.length - 1 ? <Line /> : null}
              </BoxContentWrapper>
            ))}
          </Box>
          <BlueButton
            onClick={() => {
              navigate("/upload-call");
            }}
          >
            확인하기
          </BlueButton>
        </Search>
      ) : null}
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
  gap: 24px;
`;
const MiddleButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 61px;
`;
const GrayButton = styled.button`
  border: 1px solid transparent;
  display: flex;
  width: 120px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--neutral-5, #f3f3f3);
  color: var(--neutral-30, #b3b3b3);
  text-align: center;

  /* Body/Body4/Medium */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.42px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 508px;
  height: 274px;
  padding: 20px 16px;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--neutral-20, #ccc);
  background: var(--neutral-white, #fff);
  margin-top: 31px;
  overflow-y: scroll;
`;
const BoxContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 10px 15px 17px 15px;
`;
const BoxName = styled.p`
  margin: 0;
  color: #000;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;

  /* Heading/H2 */
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px; /* 118.75% */
  letter-spacing: -0.96px;
`;
const BoxPhone = styled.p`
  margin: 0;
  color: var(--primary-100, #372fff);

  /* Body/Body1/Medium */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */
  letter-spacing: -0.4px;
`;
const BoxEmail = styled.p`
  margin: 0;
  color: var(--secondary-grayscale-grayscale-60, #666);

  /* Body/Body4/Regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.42px;
`;
const BoxContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Line = styled.div`
  width: calc(100% - 30px);
  height: 1px;
  background: rgba(0, 0, 0, 0.09);
`;
const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 46px;
`;
const BlueButton = styled.button`
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
  margin-bottom: 69px;
`;
