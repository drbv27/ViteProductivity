import React from "react";
import styled from "@emotion/styled";

const BotRegAc = styled.button`
  /* background-color: #98bf11; */

  color: white;
  height: 40px;
  border-radius: 10px;
  border: none;
  font-size: 1.3rem;
  margin-left:2rem;
  cursor: pointer;
  border-bottom: 3px solid #1097d5;
  transition: all 0.3s;
  &:hover {
    transform: translate(0px, 3px);
    border-bottom: 1px solid #2ecc71;
  }
`;

const BotonRegiActiv = ({ tipo, text,colores,posicion,marge1,margen2,fonClick,...props }) => {
  return <BotRegAc style={{backgroundColor:colores,position:posicion,marginInlineStart:marge1,marginBlockStart:margen2}} type={tipo} onClick={fonClick}>{text} {props.children}</BotRegAc>;
};

export default BotonRegiActiv;
