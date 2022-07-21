import React from "react";
import robot from "../../../img/robot.png";
import styled from "@emotion/styled";

const ConReg = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  flex-grow:1;
  padding-inline-start:12rem;
`;

const ConteRegistro = ({ enviar, ...props }) => {
  return (
    <ConReg
      onSubmit={enviar}
      style={{
        backgroundImage: `url(${robot})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {props.children}
    </ConReg>
  );
};

export default ConteRegistro;
