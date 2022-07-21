import React, { useState } from "react";
import ConteRegistro from "./formregistro/ConteRegistro";
import LabelRegistro from "./formregistro/LabelRegistro";
import InputRegistro from "./formregistro/InputRegistro";
import TextareaRegistro from "./formregistro/TextareaRegistro";
import BotonRegiActiv from "./formregistro/BotonRegiActiv";
import Titulo from "./ui/Titulo";
import ContBloq from "./formlogin/ContBloq";
import ConSubBlo from "./formregistro/ConSubBlo";
import data from "../../data/data.js";

import firebaseApp from "../../../conexion";
import { getFirestore, updateDoc, doc } from "firebase/firestore";
import DataListRegistro from "./formregistro/DataListRegistro";
const firestore = getFirestore(firebaseApp);

const FormRegistro = ({ correoUsuario, setArrayTareas, arrayTareas }) => {
  const datain = data;

  const [subp, setSubp] = useState("");

  const [inicioC,setInicioC] = useState("")
  const [finalC,setFinalC] = useState("")
  
  function cambio(e) {
    e.preventDefault();
    const evento = e.target.value;
    setSubp(evento);

    /* console.log(evento); */
  }
  /* console.log(data); */

  const iniciarC = ()=>{
    const iniciar = new Date();
    const horaI = iniciar.getHours()
    let minutoI = iniciar.getMinutes()
    minutoI<=9 ? minutoI=`0${minutoI}`:minutoI=minutoI
    setInicioC(`${horaI}:${minutoI}`)
    console.log(`${horaI}:${minutoI}`);
    
  }
  const finalizarC = ()=>{
    const finalizar = new Date();
    const horaF = finalizar.getHours()
    let minutoF = finalizar.getMinutes()
    minutoF<=9 ? minutoF=`0${minutoF}`:minutoF=minutoF
    setFinalC(`${horaF}:${minutoF}`)
    console.log(`${horaF}:${minutoF}`);
    
  }

  const fecha = ()=>{
    const fechar =new Date();
    let dia = fechar.getDate();
    dia<=9 ? dia=`0${dia}`:dia=dia;
    let mes = fechar.getMonth()+1;
    mes<=9 ? mes=`0${mes}`:mes=mes;
    const anio = fechar.getFullYear();
    console.log(fechar)
    console.log(`${anio}-${mes}-${dia}`)
    return `${anio}-${mes}-${dia}`
  }

  async function añadirTarea(e) {
    e.preventDefault();
    const fecha = e.target.formFecha.value;
    /* const inicio = e.target.formInicio.value; */
    const inicio = inicioC;
    

    /* const final = e.target.formFinal.value; */
    const final = finalC;
    const subproceso = e.target.formSubproceso.value;
    const proceso = e.target.formProceso.value;
    const macroproceso = e.target.formMacroproceso.value;
    const actividad = e.target.formActividad.value;
    const total =
      final.split(":").reduce((p, c) => parseInt(p) * 60 + parseInt(c)) -
      inicio.split(":").reduce((p, c) => parseInt(p) * 60 + parseInt(c));

    //CREAR NUEVO ARRAY DE TAREAS
    const nuevoArrayTareas = [
      ...arrayTareas,
      {
        id: +new Date(),
        fecha: fecha,
        inicio: inicio,
        final: final,
        subproceso: subproceso,
        proceso: proceso,
        macroproceso: macroproceso,
        actividad: actividad,
        total: total,
      },
    ];
    //actualizar DB
    const docuRef = doc(firestore, `usuarios/${correoUsuario}`);
    updateDoc(docuRef, { tareas: [...nuevoArrayTareas] });
    //actualizar state
    setArrayTareas(nuevoArrayTareas);
    //Limpiar formulario
    e.target.formFecha.value = "";
    e.target.formInicio.value = "";
    e.target.formFinal.value = "";
    e.target.formSubproceso.value = "";
    e.target.formProceso.value = "";
    e.target.formMacroproceso.value = "";
    e.target.formActividad.value = "";
  }
  return (
    <div style={{display:"flex",flexDirection:"row-reverse"}}>
      <div style={{display:"flex",flexDirection:"column"}}>
        <button 
        id="formInicio" 
        onClick={iniciarC}
        text="Iniciar Actividad">Iniciar Tarea</button>
        <button 
        id="formFinal" 
        onClick={finalizarC}
        text="Finalizar Actividad">Finalizar Tarea</button>
      </div>
      <ConteRegistro enviar={añadirTarea}>
        <ContBloq>
          <ConSubBlo>
            {fecha()}
            {/* <LabelRegistro para="fecha" texto="Fecha Actividad" />
            <InputRegistro tipo="date" ident="formFecha" /> */}
          </ConSubBlo>
          <ConSubBlo>
            {/* <LabelRegistro para="inicio" texto="Hora Inicio" /> */}
            {/* <InputRegistro tipo="time" ident="formInicio" /> */}
          </ConSubBlo>
        </ContBloq>
        <ContBloq>
          <ConSubBlo>
            {/* <LabelRegistro para="final" texto="Hora Final" /> */}
            {/* <InputRegistro tipo="time" ident="formFinal" /> */}
          </ConSubBlo>
          <ConSubBlo>
            <LabelRegistro para="subprocesos" texto="Ingrese Actividad" />
            <InputRegistro
              lista="subprocesos"
              nom="formSubproceso"
              ident="formSubproceso"
              placeh="Subproceso"
              cambiar={cambio}
            />
            <DataListRegistro ident="subprocesos">
              {datain.map((subproc, index) => (
                <option key={index}>{subproc.subproceso}</option>
              ))}
            </DataListRegistro>
          </ConSubBlo>
        </ContBloq>
        <ContBloq>
          <ConSubBlo>
            <LabelRegistro para="procesos" texto="Proceso" />
            <InputRegistro
              tipo="tipo"
              ident="formProceso"
              tamano="tamaño"
              nom="formProceso"
              placeh="Proceso"
              readOnly
              valor={
                subp === ""
                  ? ""
                  : datain
                      .filter((subpr) => subpr.subproceso.includes(subp))
                      .map((filtrado) => filtrado.proceso)
              }
            />
          </ConSubBlo>
          <ConSubBlo>
            <LabelRegistro para="procesos" texto="Macroproceso" />
            <InputRegistro
              tipo="tipo"
              ident="formMacroproceso"
              tamano="tamaño"
              nom="formMacroproceso"
              placeh="Macroproceso"
              readOnly
              valor={
                subp === ""
                  ? ""
                  : datain
                      .filter((subpr) => subpr.subproceso.includes(subp))
                      .map((filtrado) => filtrado.macroproceso)
              }
            />
          </ConSubBlo>
        </ContBloq>
        <TextareaRegistro
          placeh="Descripcion de la Actividad"
          ident="formActividad"
          column={30}
          rowst={5}
        />
        <BotonRegiActiv tipo="submit" text="Registrar Actividad" />
      </ConteRegistro>
    </div>
  );
};

export default FormRegistro;
