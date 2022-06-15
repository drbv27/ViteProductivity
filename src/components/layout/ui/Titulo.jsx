import React from "react";
import styled from "@emotion/styled";

const TituloC = styled.h2`
  color: white;
  position: absolute;
  left: 43rem;
  top: 5rem;
  font-size: 2rem;
`;

const Titulo = ({ texto }) => {
  return <TituloC>{texto}</TituloC>;
};

export default Titulo;
