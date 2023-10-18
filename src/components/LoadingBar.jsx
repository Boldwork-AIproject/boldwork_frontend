import React from "react";
import styled from "styled-components";

const LoadingBar = () => {
  return (
    <LoadingContainer>
      <Ellipse1 />
      <Ellipse2 />
      <Ellipse2 />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px; 
`;

const Ellipse1 = styled.div`
  width: 20px; 
  height: 20px;
  border-radius: 50%;
  background-color: var(--primary-100, #4F80FF); 
  margin: 0 10px;
`;
const Ellipse2 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--neutral-20, #ccc); 
  margin: 0 10px;
`;

export default LoadingBar;