import React from "react";
import styled from "@emotion/styled";

const BotonInicio = styled.button`
  background-color: red;
`;

const BotonLogin = ({ tipo, texto }) => {
  return <BotonInicio type={tipo}>{texto}</BotonInicio>;
};

export default BotonLogin;
