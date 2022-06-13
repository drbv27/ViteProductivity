import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import styled from '@emotion/styled'

const PrincipalC = styled.div`
    margin-left:15vw;
`

const Layout = ({usuario,...props}) => {
  //console.log(`usuario Layout: ${usuario}`)
  return (
    <>
      <Navbar usuario={usuario}/>
      <Header usuario={usuario}/>
      <PrincipalC>{props.children}</PrincipalC>

    </>
  );
};

export default Layout;