import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea, faHouse } from "@fortawesome/free-solid-svg-icons";

const Contenedor = styled.div`
  background-color: #1097d5;
  position: fixed;
  width: 15vw;
  height: 100%;
  color:white;
  font-weight:bold;
`;

const ListaN = styled.ul`
  margin:5rem 0 0 5px;
  
`;

const ItemNav = styled.li`
  margin:1rem 0 1rem 0;
  display:flex;
`;

const Enlace = styled.a`
  margin-left:15px;
  cursor:pointer;
`





const Navbar = ({usuario}) => {
  return (
    <>
      <Contenedor>
        <h2 className="titu">Barra Lateral</h2>

        <ul>
          <li>
            <Link to="/"><FontAwesomeIcon icon={faHouse} /> Inicio</Link>
          </li>
          <li>
            <Link to="/dash"><FontAwesomeIcon icon={faChartArea} /> Dashboard</Link>
          </li>
        </ul>
 
      </Contenedor>
    </>
  );
};

export default Navbar;
