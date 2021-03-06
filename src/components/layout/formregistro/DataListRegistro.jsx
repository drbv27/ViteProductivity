import React from "react";
import styled from "@emotion/styled";

const DataLisReg = styled.datalist`
  border: 2px solid #a7a7a7;
  width: 250px;
  text-align: left;
  height: 40px;
  color: #000000;
  font-size: 16px;
  margin: 0.5rem 1rem 2rem 1rem;
  border-radius: 5px;
`;

const DataListRegistro = ({ ident, ...props }) => {
  return <DataLisReg id={ident}>{props.children}</DataLisReg>;
};

export default DataListRegistro;
