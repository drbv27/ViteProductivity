import React from 'react';
import TableModel from "./ui/TableModel";
import TableComponent from "./TableComponent";
import ThModel from "./ui/ThModel";
import TdModel from "./ui/TdModel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import firebaseApp from '../../../conexion';
import { getFirestore,updateDoc,doc } from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

const ListadoTareas = ({arrayTareas,correoUsuario,setArrayTareas}) => {


  const today = new Date()
        let mes = ""
        let dia = ""
        {today.getMonth()+1>=9?mes=today.getMonth()+1:mes=`0${today.getMonth()+1}`}
        {today.getDate()>=9?dia=today.getDate():dia=`0${today.getDate()}`}
        //console.log(`hoy:${today}`);
        //console.log(mes,dia)
        const hoy = `${today.getFullYear()}-${mes}-${dia}`

    async function eliminarTarea(idTareaAEliminar){
        //crear nuevo array de tareas
        const nuevoArrayTareas = arrayTareas.filter((objetoTarea)=>objetoTarea.id !== idTareaAEliminar);
        //actualizar base de datos
        const docuRef = doc(firestore,`usuarios/${correoUsuario}`);
        updateDoc(docuRef,{tareas:[...nuevoArrayTareas]});
        //actualizar state
        setArrayTareas(nuevoArrayTareas);
      }

      const calculoTiempo = (tfinal,tinicial)=>{
    
        let minInicio = tinicial.split(':').reduce((p,c)=>parseInt(p)*60+parseInt(c));
        let minFinal = tfinal.split(':').reduce((p,c)=>parseInt(p)*60+parseInt(c));
        let diferencia = minFinal-minInicio;
        let horas = Math.floor(diferencia/60);
        let minutos = diferencia%60;
        if (minutos<10){
            minutos = `0${minutos}`
         }
        return (`${horas}:${minutos}`)
       }

       const calcTotal = (arrayT) =>{
        const sum = arrayTareas.reduce((prev,curr,index,array)=>prev+curr.total,0)
        /* console.log(sum) */
        return (`${sum}`)
      }
    
/*        const filtro = ()=>{
        const gerencia = arrayTareas.filter((act)=>{
          return(
            act.macroproceso==="Gerencia"
          )
        })
        console.log(gerencia[0].fecha)
        const totGer = gerencia.reduce((prev,curr,index,array)=>prev+curr.total,0)
        console.log(totGer) 
      }  */
       const filtro = ()=>{
        const gerencia = arrayTareas.filter((dat)=>{
          return(
            dat.fecha>="2022-06-22" && dat.fecha<="2022-06-23"
          )
        })
        //console.log(gerencia)
        const today = new Date()
        let mes = ""
        let dia = ""
        {today.getMonth()+1>=9?mes=today.getMonth()+1:mes=`0${today.getMonth()+1}`}
        {today.getDate()>=9?dia=today.getDate():dia=`0${today.getDate()}`}
        //console.log(`hoy:${today}`);
        //console.log(mes,dia)
        const hoy = `${today.getFullYear()}-${mes}-${dia}`
        console.log(hoy)
        console.log(gerencia[0].fecha);
        const totGer = gerencia.reduce((prev,curr,index,array)=>prev+curr.total,0)
        const gerencia2 = arrayTareas.filter((dat)=>{
          return(
            dat.fecha===hoy
          )
        })
        
        console.log(gerencia2);
        {gerencia2.map((objetoTarea)=>{
          return(
            
            <div>
            <p>{objetoTarea.proceso}</p>
            </div>
          
          
          )
        })}
        //console.log(totGer) 
      } 

  return (
    <div>
      <h1>Actividades</h1>
      <TableComponent>
        <TableModel>
          <ThModel>Día</ThModel>
          <ThModel>Inicio</ThModel>
          <ThModel>Fin</ThModel>
          <ThModel>Subproceso</ThModel>
          <ThModel>proceso</ThModel>
          <ThModel>macroproceso</ThModel>
          <ThModel>Actividad</ThModel>
          <ThModel>Duración</ThModel>
          <ThModel></ThModel>
          <ThModel></ThModel>

        </TableModel>
        
        {arrayTareas.map((objetoTarea)=>{
          return(
            
            <tr>
            <TdModel>{objetoTarea.fecha}</TdModel>
            <TdModel>{objetoTarea.inicio}</TdModel>
            <TdModel>{objetoTarea.final}</TdModel>
            <TdModel>{objetoTarea.subproceso}</TdModel>
            <TdModel>{objetoTarea.proceso}</TdModel>
            <TdModel>{objetoTarea.macroproceso}</TdModel>
            <TdModel>{objetoTarea.actividad}</TdModel>
            <TdModel>{calculoTiempo(objetoTarea.final,objetoTarea.inicio)}</TdModel>
            <TdModel><button style={{backgroundColor:"#1097d5", borderColor:"#1097d5"}}><FontAwesomeIcon icon={faPenToSquare} style={{color:"white"}}/></button></TdModel>
            <TdModel><button onClick={()=>eliminarTarea(objetoTarea.id)} style={{backgroundColor:"red", borderColor:"red"}}><FontAwesomeIcon icon={faTrashCan} style={{color:"white"}}/></button></TdModel>
            </tr>
          
          
          )
        })}
        

        <tr>
        <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th style={{borderRadius:'20px 0 0 20px', marginTop:'20px', backgroundColor:'#1097d5', color:'white', paddingTop:'10px', paddingBottom:'10px'}}>total</th>
          <th style={{borderRadius:'0 20px 20px 0', marginTop:'20px', backgroundColor:'#1097d5', color:'white'}}>{calcTotal(arrayTareas)}</th> 
        </tr> 
         <tr>
        <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>filtro:</th>
           
        </tr> 
      </TableComponent>
      <h2>filtrado</h2>
      {arrayTareas.filter((dat)=>{
          return(
            /* dat.fecha>="2022-06-22" && dat.fecha<="2022-06-23" */
            dat.fecha===hoy
          )
        }).map((objt)=>{
          return(
            <tr>
              <td>
              {objt.fecha}
              </td>
              <td>
              {objt.inicio}
              </td>
              <td>
              {objt.final}
              </td>
              <td>
              {objt.subproceso}
              </td>
              <td>
              {objt.proceso}
              </td>
              <td>
              {objt.macroproceso}
              </td>
              <td>
              {objt.actividad}
              </td>
            </tr>
          )
        })}
    </div>
  )
}

export default ListadoTareas