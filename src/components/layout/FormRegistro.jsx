import React, { useState } from "react";
import ConteRegistro from "./formregistro/ConteRegistro";
import LabelRegistro from "./formregistro/LabelRegistro";
import InputRegistro from "./formregistro/InputRegistro";
import TextareaRegistro from "./formregistro/TextareaRegistro";
import BotonRegiActiv from "./formregistro/BotonRegiActiv";
import Titulo from "./ui/Titulo";
import ContBloq from "./formlogin/ContBloq";
import ConSubBlo from "./formregistro/ConSubBlo";
import data from "../../data/data.js"

import firebaseApp from "../../../conexion";
import { getFirestore,updateDoc,doc } from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

const FormRegistro = ({usuario,setArrayTareas,arrayTareas}) => {
  const datain = data;

  const [subp, setSubp] = useState("");
  function cambio(e) {
    e.preventDefault();
    const evento = e.target.value;
    setSubp(evento);
    /* console.log(evento); */
  }
  /* console.log(data); */



  
  return (
    <>
      
      <form >
        <input type="date" id="formFecha"/>
        <input type="time" id="formInicio"/>
        <input type="time" id="formFinal"/>
        
        <label htmlFor="subprocesos">Escoja el subproceso:</label>
        <input list="subprocesos" name="formSubproceso" id="formSubproceso" onChange={cambio}/>
        <datalist id="subprocesos">
          {datain.map((subproc,index) => (
          <option key={index}>{subproc.subproceso}</option>
          ))}
        </datalist>

        <input type="tipo" id="formProceso" size="tamaño" name="formProceso" readOnly value={subp===""
          ?"":
          datain
            .filter((subpr) => subpr.subproceso.includes(subp))
            .map((filtrado) => (
              filtrado.proceso
            ))}/>
        <input type="tipo" id="formMacroproceso" size="tamaño" name="formMacroproceso" readOnly value={subp===""
          ?"":
          datain
            .filter((subpr) => subpr.subproceso.includes(subp))
            .map((filtrado) => (
              filtrado.macroproceso
            ))}/>
        <textarea placeholder="actividad" id="formActividad"/>
        <input type="submit"/>
      </form>
    </>
  )
};

export default FormRegistro;
