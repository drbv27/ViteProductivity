import React from "react";
import styled from "@emotion/styled";

const LabReg = styled.label`
  color: #837b7b;
  font-size: 1.2rem;
`;

const LabelRegistro = ({ para, texto }) => {
  return <LabReg htmlFor={para}>{texto}</LabReg>;
};

export default LabelRegistro;
