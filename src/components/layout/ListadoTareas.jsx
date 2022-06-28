import React from 'react';
import TableModel from "./ui/TableModel";
import TableComponent from "./TableComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import firebaseApp from '../../../conexion';
import { getFirestore,updateDoc,doc } from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

const ListadoTareas = ({arrayTareas,correoUsuario,setArrayTareas}) => {

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
    
/*       const filtro = ()=>{
        const gerencia = arrayTareas.filter((act)=>{
          return(
            act.macroproceso==="Gerencia"
          )
        })
        console.log(gerencia)
        const totGer = gerencia.reduce((prev,curr,index,array)=>prev+curr.total,0)
        console.log(totGer) 
      } */

  return (
    <div>
      <h1>Actividades</h1>
      <div style={{border:'1px solid black', borderRadius:'5px'}}>
      <TableComponent>
        <TableModel>
          <th>Dia</th>
          <th>Inicio</th>
          <th>Fin</th>
          <th>Subproceso</th>
          <th>proceso</th>
          <th>macroproceso</th>
          <th>Actividad</th>
          <th>Duración</th>
          <th></th>
          <th></th>

        </TableModel>
        {arrayTareas.map((objetoTarea)=>{
          return(
            
            <tr>
            <td>{objetoTarea.fecha}</td>
            <td>{objetoTarea.inicio}</td>
            <td>{objetoTarea.final}</td>
            <td>{objetoTarea.subproceso}</td>
            <td>{objetoTarea.proceso}</td>
            <td>{objetoTarea.macroproceso}</td>
            <td>{objetoTarea.actividad}</td>
            <td>{calculoTiempo(objetoTarea.final,objetoTarea.inicio)}</td>
            <td><button style={{backgroundColor:"blue", borderColor:"blue"}}><FontAwesomeIcon icon={faPenToSquare} style={{color:"white"}}/></button></td>
            <td><button onClick={()=>eliminarTarea(objetoTarea.id)} style={{backgroundColor:"red", borderColor:"red"}}><FontAwesomeIcon icon={faTrashCan} style={{color:"white"}}/></button></td>
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
          <th>total</th>
           <th>{calcTotal(arrayTareas)}</th> 
        </tr> 
{/*         <tr>
        <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>total</th>
           <th>{filtro()}</th> 
        </tr> */}
      </TableComponent>
      </div>
    </div>
  )
}

export default ListadoTareas