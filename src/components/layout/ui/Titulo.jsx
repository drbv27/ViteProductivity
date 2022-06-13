import React from "react";
import styled from "@emotion/styled";

const TituloC = styled.h2`
  color: red;
`;

const Titulo = ({ texto }) => {
  return <TituloC>{texto}</TituloC>;
};

export default Titulo;
