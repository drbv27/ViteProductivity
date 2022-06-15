import React from "react";
import styled from "@emotion/styled";

const BotonRegis = styled.button`
  background-color: green;
  color: white;
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
