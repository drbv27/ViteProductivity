import { useState,useEffect} from "react";

import firebaseApp from "../../conexion";
import { getFirestore,doc,getDoc,setDoc } from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

const useDataUser = (usuario)=>{
    const [arrayTareas,setArrayTareas] = useState(null);

    const correoUsuario = usuario.email;
    /* console.log(usuario.email); */
    const fakeData = [
      {id:1,fecha:"Lunes",inicio:"8:00am",final:"9:00am" ,subproceso:"ventas",proceso:"planeación",macroproceso:"gerencia",actividad:"reunión",total:"1h"},{id:2,fecha:"Lunes",inicio:"9:00am",final:"10:00am" ,subproceso:"guias",proceso:"planeación",macroproceso:"educacion",actividad:"elabora guias",total:"1h"},{id:3,fecha:"Lunes",inicio:"10:00am",final:"11:00am" ,subproceso:"inventario",proceso:"almacen",macroproceso:"ingenieria",actividad:"conteo",total:"1h"},]
    
    async function buscarDocumentoOrCrearDocumento(idDocumento){
      //crear referencia sl documento
      const docuRef = doc(firestore,`usuarios/${idDocumento}`)
      //buscar documento
      const consulta = await getDoc(docuRef);
      //revisar si existe
      if (consulta.exists()){
        //si si existe
        const infoDocu = consulta.data();
        return infoDocu.tareas;
      }else{
        //si no existe
        await setDoc(docuRef,{tareas:[...fakeData]});
        const consulta = await getDoc(docuRef);
        const infoDocu = consulta.data();
        return infoDocu.tareas;
      }
    }
  
    useEffect(()=>{
      async function fetchTareas(){
        const tareasFetchadas= await buscarDocumentoOrCrearDocumento(correoUsuario);
        setArrayTareas(tareasFetchadas);
      }
      fetchTareas();
      },[]);
    return {
        arrayTareas,correoUsuario,setArrayTareas
    }
}

export default useDataUser;