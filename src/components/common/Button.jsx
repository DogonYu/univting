import React from "react";
import styled from "styled-components";

const Button = ({ children, ...rest }) => {
  return <ButtonWrap {...rest}>{children}</ButtonWrap>;
};

const ButtonWrap = styled.button`
  outline: none;
  background: white;
  border: 1px solid black;
  color: black;
  border-radius: 5px;
  font-size: 36px;
  padding: 1rem 3rem;
  cursor: pointer;
`;

export default Button;
