import React from "react";
import styled from "@emotion/styled";

const ContenedorLo = styled.div`
  height: 93vh;
  display: flex;
  flex-direction: column;
`;

const ConteLogin = (props) => {
  return <ContenedorLo>{props.children}</ContenedorLo>;
};

export default ConteLogin;
