import './App.css'
import React,{useState} from "react";
import Home from './components/Home';
import Login from './components/Login';
import firebaseApp from '../credenciales';
import {getAuth,onAuthStateChanged} from "firebase/auth"

const auth = getAuth(firebaseApp);

function App() {
  const [usuarioGlobal,setUsuarioGlobal] = useState(null);
  const [validacion,setValidacion] = useState(null)

  onAuthStateChanged(auth,(usuarioFirebase)=>{
    if(usuarioFirebase){
      //codigo en caso de que haya sesión iniciada
      setUsuarioGlobal(usuarioFirebase)

    }else{
      //codigo en caso de que no haya sesion iniciada
      setUsuarioGlobal(null);
    }
  })

  //console.log(usuarioGlobal);
  return (
    <>
        {usuarioGlobal ? <Home usuario={usuarioGlobal}/> : <Login />}
    </>
  )
}

export default App
