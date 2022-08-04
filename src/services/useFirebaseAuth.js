import { useState } from 'react';
import firebaseApp from '../../conexion';
import {getAuth,onAuthStateChanged} from "firebase/auth"

const auth = getAuth(firebaseApp);

const useFirebaseAuth = ()=>{
    const [globalUser,setGlobalUser] = useState(null)
    onAuthStateChanged(auth,(usuarioFirebase)=>{
        if(usuarioFirebase){
            /* console.log("prueba",usuarioFirebase) */
          //codigo en caso de que haya sesión iniciada
          
          setGlobalUser(usuarioFirebase)
    
        }
      })
      return globalUser
    }

export default useFirebaseAuth