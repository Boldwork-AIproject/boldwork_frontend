import React from "react";
import styled from "styled-components";

export default function TextareaWithLabel({
  text,
  star,
  value,
  setValue,
  placeholder,
}) {
  return (
    <Container>
      <Text>
        {text}
        {star ? <Star> *</Star> : null}
      </Text>
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9.5px;
`;
const Text = styled.p`
  margin: 0;
  color: var(--neutral-80, #333);

  /* Body/Body3/Medium */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */
  letter-spacing: -0.48px;
`;
const Star = styled.em`
  color: var(--system-warning, #ff4848);

  /* Body/Body3/Medium */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.48px;
`;
const Textarea = styled.textarea`
  display: flex;
  width: 508px;
  height: 160px;
  padding: 14px 16px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.$highlight ? "#372FFF" : "#ccc")};
  background: var(--neutral-white, #fff);
  color: ${(props) => (props.$nonEdit ? "#999" : "#333")};

  /* Body/Body3/Regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  letter-spacing: -0.48px;
  resize: none;
`;
