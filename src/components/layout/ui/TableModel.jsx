import React from 'react'
import styled from "@emotion/styled";

const TrCambio = styled.tr`
background-color: #98bf11;

`

const TableModel = ({...props}) => {
  return <TrCambio>{props.children}</TrCambio>


};

export default TableModel