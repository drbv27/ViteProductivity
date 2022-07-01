import React from 'react';
import styled from "@emotion/styled";

const TableCompo = styled.table`
width: 100%;
border-collapse: collapse;
border-radius: 20px;
table-layout: fixed;
text-align: center;
font: 13px Verdan
`

const TableComponent = ({...props}) => {
  return (
    <TableCompo>{props.children}</TableCompo>
  )
}

export default TableComponent