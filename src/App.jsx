import './App.css'
import React,{useState} from "react";
import Home from './components/Home';
import Login from './components/Login';
/* import firebaseApp from '../conexion';
import {getAuth,onAuthStateChanged} from "firebase/auth"

const auth = getAuth(firebaseApp); */

import useFirebaseAuth from './services/useFirebaseAuth';

function App() {
  const usuarioGlobal = useFirebaseAuth()
  




  console.log(usuarioGlobal);
  return (
    <>
        {usuarioGlobal ? <Home usuario={usuarioGlobal}/> : <Login />}
        
    </>
  )
}

export default App

