import React,{useState} from 'react'
import Layout from './layout/Layout'
import firebaseApp from '../../conexion';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

const Login = () => {

  const [estaRegistrandose,setEstaRegistrandose] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    const correo = e.target.userName.value;
    const contra = e.target.password.value;
    //console.log(correo,contra);
    if(estaRegistrandose){
      //si se rgistra
      const usuario = await createUserWithEmailAndPassword(auth,correo,contra);
    }else{
      //console.log(usuario);
      //si esta iniciando sesión
      signInWithEmailAndPassword(auth,correo,contra)
    }

  }

  return (
    <Layout >
      <h1>{estaRegistrandose ? "Registrate" : "Inicia Sesión"}</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor='usuario'>Usuario</label>
                <input type="text" placeholder="ingrese usuario" id="userName"/>
                <label htmlFor='usuario'>Contraseña</label>
                <input type="password" placeholder="ingrese contraseña" id="password"/>
                <button type="submit">
                    {estaRegistrandose ? "Registrate" : "Inicia sesión"}
                </button>
            </form>
            <button onClick={() => setEstaRegistrandose(!estaRegistrandose)}>
                    {estaRegistrandose ? "Ya tienes cuenta? Inicia sesión" : "No tienes cuenta? Registrate"}
            </button>
    </Layout>
  )
}

export default Login