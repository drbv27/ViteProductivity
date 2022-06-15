import React from "react";
import styled from "@emotion/styled";

const BotonInicio = styled.button`
  background-color: #98bf11;
  color: white;
  width: 20%;
  height: 40px;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-bottom: 5px solid #1097d5;
  transition: all 0.3s;
  &:hover {
    transform: translate(0px, 5px);
    border-bottom: 1px solid #2ecc71;
  }
`;

const BotonLogin = ({ tipo, texto }) => {
  return <BotonInicio type={tipo}>{texto}</BotonInicio>;
};

export default BotonLogin;
