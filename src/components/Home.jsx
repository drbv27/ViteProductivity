import React,{ useState,useEffect} from "react";
import Layout from "./layout/Layout";
import FormRegistro from "./layout/FormRegistro";
import ListadoTareas from "./layout/ListadoTareas";

import firebaseApp from "../../conexion";
import { getFirestore,doc,getDoc,setDoc } from "firebase/firestore";
import Selector from "./layout/Selector";

import useDataUser from "../Hooks/useDataUser";


const firestore = getFirestore(firebaseApp);


const Home = ({ usuario }) => {

const {arrayTareas,correoUsuario,setArrayTareas} = useDataUser(usuario)

  return (
    <Layout usuario={usuario.email}>
      <FormRegistro arrayTareas={arrayTareas} correoUsuario={correoUsuario} setArrayTareas={setArrayTareas} />
      {
          arrayTareas &&
          <ListadoTareas arrayTareas={arrayTareas} correoUsuario={correoUsuario} setArrayTareas={setArrayTareas}/>
          
          }
      <Selector arrayTareas={arrayTareas}/>
    </Layout>
  );
};

export default Home;
