import React from "react";
import styled from "@emotion/styled";

const InpLog = styled.input`
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  height: 40px;
  color: #fff;
  font-size: 16px;
  margin-bottom: 3rem;
`;

const InputLogin = ({ tipo, iden, placeh }) => {
  return <InpLog type={tipo} id={iden} placeholder={placeh} />;
};

export default InputLogin;
