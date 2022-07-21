import React from "react";
import styled from "@emotion/styled";

const TeArea = styled.textarea`
  border: 2px solid #a7a7a7;
  color: #000000;
  font-size: 16px;
  margin: 0.5rem 1rem 0.5rem 4rem;
  border-radius: 5px;
`;

const TextareaRegistro = ({ txtn, ident, placeh, column, rowst }) => {
  return (
    <TeArea
      name={txtn}
      id={ident}
      placeholder={placeh}
      cols={column}
      rows={rowst}
    ></TeArea>
  );
};

export default TextareaRegistro;
