import React from "react";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  margin-left: 15vw;
`;

const ContenedorP = (props) => {
  return <Contenedor>{props.children}</Contenedor>;
};

export default ContenedorP;
