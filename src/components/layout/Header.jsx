import React from "react";
import styled from "@emotion/styled";
import firebaseApp from "../../../credenciales";
import { getAuth,signOut } from "firebase/auth";

const auth = getAuth(firebaseApp);


const Cabecera = styled.div`
  padding-left:7px;
  padding-right:7px;
  margin-left: 15vw;
  height: 40px;
  background-color: #81b71f;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  color:white;
  font-weight:bold;
`;
const BotonC = styled.button`
  padding:2px;
  background-color:#1097d5;
  border:2px solid #1097d5;
  border-radius:5px;
  color:white;
  font-weight:bold;
  cursor:pointer;
  &:hover{
    background-color:white;
    color:#1097d5;
  }
`

const Header = ({usuario}) => {
  console.log(usuario)
  return (
    <>
      <Cabecera>
          {usuario ?
          <>
          <h4>{`Hola: ${usuario}`}</h4>
          <BotonC onClick={()=>signOut(auth)}>Cerrar Sesión</BotonC>
          </>
          :
          <h1>Pygmalion</h1>
        }
      </Cabecera>
    </>
  );
};

export default Header;
