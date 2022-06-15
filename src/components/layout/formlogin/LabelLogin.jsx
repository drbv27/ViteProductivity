import React from "react";
import styled from "@emotion/styled";

const LabLog = styled.label`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const LabelLogin = ({ para, texto }) => {
  return <LabLog htmlFor={para}>{texto}</LabLog>;
};

export default LabelLogin;
