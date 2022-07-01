import React from 'react'
import styled from "@emotion/styled";

const TableChanges = styled.td`
padding: 10px;
color: black;
text-wrap: normal;
word-wrap: break-word;
&:nth-child(1){
    background: #FAFAFA;
}
&:nth-child(3){
    background: #FAFAFA;
}
&:nth-child(5){
    background: #FAFAFA;
}
&:nth-child(7){
    background: #FAFAFA;
}
&:nth-child(9){
    background: #FAFAFA;
}
`

const TdModel = ({...props}) => {
  return (
    <TableChanges>{props.children}</TableChanges>
  )
}

export default TdModel