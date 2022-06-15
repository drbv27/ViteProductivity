import React from "react";
import styled from "@emotion/styled";

const BotonRegis = styled.button`
  background-color: #98bf11;
  color: white;
  width: 20%;
  height: 40px;
  border-radius: 10px;
  border: none;
  position: relative;
  left: 20rem;
  top: -50px;
  font-size: 0.8rem;
  cursor: pointer;
  border-bottom: 5px solid #1097d5;
  transition: all 0.3s;

  &:hover {
    transform: translate(0px, 5px);
    border-bottom: 1px solid #2ecc71;
  }
`;

const BotonRegistro = ({ setEstaRegistrandose, estaRegistrandose }) => {
  return (
    <BotonRegis onClick={() => setEstaRegistrandose(!estaRegistrandose)}>
      {estaRegistrandose
        ? "Ya tienes cuenta? Inicia sesión"
        : "No tienes cuenta? Registrate"}
    </BotonRegis>
  );
};

export default BotonRegistro;
