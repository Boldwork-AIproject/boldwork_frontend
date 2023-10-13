import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SaveCompleteModal() {
  const navigate = useNavigate();
  return (
    <Bg>
      <Modal>
        <Text>저장이 완료되었습니다.</Text>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          이전으로
        </Button>
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
  width: 330px;
  height: 164px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--neutral-5, #f3f3f3);
  background: var(--neutral-white, #fff);

  /* Elevation1 */
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;
const Text = styled.p`
  margin: 0;
  color: var(--neutral-80, #333);
  text-align: center;

  /* Body/Body3/Medium */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: -0.48px;
`;
const Button = styled.button`
  border: none;
  display: flex;
  width: 160px;
  height: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--primary-100, #372fff);
  color: var(--neutral-white, #fff);
  text-align: center;

  /* Body/Body5/Regular */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  letter-spacing: -0.36px;
`;
