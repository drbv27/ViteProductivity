import React from 'react'
import styled from "@emotion/styled";

const ModeloTh = styled.th`
font-size: 16px
padding: 20px;
color: black;
color: white;
filter: drop-shadow(0 0 0.75rem grey);
padding-top:7px;
padding-bottom:7px;
background-color: #98bf11;
&:nth-child(1){
    border-radius: 20px 0 0 0;
}
&:nth-child(10){
  border-radius: 0 20px 0 0;
}

&:nth-child(){
  border-radius: 0 20px 0 0;
}
`

const ThModel = ({...props}) => {

  return (
    <ModeloTh>{props.children}</ModeloTh>
  )
}

export default ThModel