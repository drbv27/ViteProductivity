import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import ContenedorP from "./ContenedorP";
import styled from "@emotion/styled";

const PrincipalC = styled.div``;

const Layout = ({ usuario, ...props }) => {
  //console.log(`usuario Layout: ${usuario}`)
  return (
    <>
      <Navbar usuario={usuario} />
      <Header usuario={usuario} />
      <ContenedorP>{props.children}</ContenedorP>
      {/* <PrincipalC>{props.children}</PrincipalC> */}
    </>
  );
};

export default Layout;
