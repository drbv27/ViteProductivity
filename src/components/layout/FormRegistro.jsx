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

const FormRegistro = ({correoUsuario,setArrayTareas,arrayTareas}) => {
  
  const datain = data;

  const [subp, setSubp] = useState("");
  function cambio(e) {
    e.preventDefault();
    const evento = e.target.value;
    setSubp(evento);
    /* console.log(evento); */
  }
  /* console.log(data); */

  async function añadirTarea(e){
    e.preventDefault();
    const fecha = e.target.formFecha.value;
    const inicio = e.target.formInicio.value;
    const final = e.target.formFinal.value;
    const subproceso = e.target.formSubproceso.value;
    const proceso = e.target.formProceso.value;
    const macroproceso = e.target.formMacroproceso.value;
    const actividad = e.target.formActividad.value;
    const total = (final.split(':').reduce((p,c)=>parseInt(p)*60+parseInt(c)))-(inicio.split(':').reduce((p,c)=>parseInt(p)*60+parseInt(c)))
    //CREAR NUEVO ARRAY DE TAREAS
    const nuevoArrayTareas = 
    [...arrayTareas,
      {id:+ new Date(),
        fecha:fecha,
        inicio:inicio,
        final:final,
        subproceso:subproceso,
        proceso:proceso,
        macroproceso:macroproceso,
        actividad:actividad,
        total:total,
      }];
    //actualizar DB
    const docuRef = doc(firestore,`usuarios/${correoUsuario}`);
    updateDoc(docuRef,{tareas:[...nuevoArrayTareas]});
    //actualizar state
    setArrayTareas(nuevoArrayTareas);
    //Limpiar formulario
    e.target.formFecha.value="";
    e.target.formInicio.value="";
    e.target.formFinal.value="";
    e.target.formSubproceso.value="";
    e.target.formProceso.value="";
    e.target.formMacroproceso.value="";
    e.target.formActividad.value="";
  }

  
  return (
    <>
      
      <form onSubmit={añadirTarea}>
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
