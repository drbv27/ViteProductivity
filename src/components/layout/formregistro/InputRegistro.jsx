import React from "react";
import styled from "@emotion/styled";

const InpReg = styled.input`
  border: 2px solid #a7a7a7;
  width: 250px;
  text-align: left;
  height: 40px;
  color: #000000;
  font-size: 16px;
  margin: 0.5rem 1rem 2rem 1rem;
  border-radius: 5px;
`;

const InputRegistro = ({
  cambiar,
  lista,
  tipo,
  ident,
  placeh,
  tamano,
  nom,
  valor,
}) => {
  return (
    <InpReg
      list={lista}
      type={tipo}
      id={ident}
      placeholder={placeh}
      size={tamano}
      name={nom}
      value={valor}
      onChange={cambiar}
    ></InpReg>
  );
};

export default InputRegistro;
