import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
import styled from "styled-components";
import radioCheck from "../assets/radio-check.svg";
import radioUncheck from "../assets/radio-uncheck.svg";

export default function RadiosWithLabel({
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
      <RadioGroup row value={value} onChange={(e) => setValue(e.target.value)}>
        <FormControlLabel
          value="모름"
          control={
            <Radio
              disableRipple
              sx={{
                "&.Mui-checked": {
                  color: "#372FFF",
                },
              }}
              icon={<RadioImage src={radioUncheck} />}
              checkedIcon={<RadioImage src={radioCheck} />}
            />
          }
          label={<RadioText>모름</RadioText>}
        />
        <FormControlLabel
          value="남"
          control={
            <Radio
              disableRipple
              sx={{
                "&.Mui-checked": {
                  color: "#372FFF",
                },
                marginLeft: "16px",
              }}
              icon={<RadioImage src={radioUncheck} />}
              checkedIcon={<RadioImage src={radioCheck} />}
            />
          }
          label={<RadioText>남</RadioText>}
        />
        <FormControlLabel
          value="여"
          control={
            <Radio
              disableRipple
              sx={{
                "&.Mui-checked": {
                  color: "#372FFF",
                },
                marginLeft: "16px",
              }}
              icon={<RadioImage src={radioUncheck} />}
              checkedIcon={<RadioImage src={radioCheck} />}
            />
          }
          label={<RadioText>여</RadioText>}
        />
      </RadioGroup>
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
const RadioText = styled.p`
  margin: 0;
  color: var(--neutral-80, #333);

  /* Body/Body3/Regular */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  letter-spacing: -0.48px;
  margin-left: -1px;
`;
const RadioImage = styled.img`
  width: 16px;
  height: 16px;
`;
