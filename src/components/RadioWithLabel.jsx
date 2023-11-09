import { Form } from 'react-bootstrap';
import styled from 'styled-components';

export default function RadioWithLabel({ text, star, value, setValue, placeholder }) {
  return (
      <Container>
          <Text>
              {text}
              {star ? <Star> *</Star> : null}
          </Text>
          <Form>
              <Form.Group controlId="radioGroup">
                  <div className="mb-3">
                      <Form.Check
                          inline
                          label="모름"
                          type="radio"
                          name="group1"
                          checked={value === "모름" || value === ""} // Check if the value matches the radio option
                          onChange={() => setValue("모름")} // Update value to "모름"
                      />
                      <Form.Check
                          inline
                          label="남"
                          type="radio"
                          name="group1"
                          checked={value === "남성"} // Check if the value matches the radio option
                          onChange={() => setValue("남성")} // Update value to "남성"
                      />
                      <Form.Check
                          inline
                          label="여"
                          type="radio"
                          name="group1"
                          checked={value === "여성"} // Check if the value matches the radio option
                          onChange={() => setValue("여성")} // Update value to "여성"
                      />
                  </div>
              </Form.Group>
          </Form>
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