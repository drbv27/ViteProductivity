import React from 'react';
import styled from "@emotion/styled";

const TableCompo = styled.table`
width: 100%;
text-align: center;
font: 13px Verdana


`

const TableComponent = ({...props}) => {
  return (
    <TableCompo>{props.children}</TableCompo>
  )
}

export default TableComponent