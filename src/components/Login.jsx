import React, { useState } from "react";
import Layout from "./layout/Layout";
import firebaseApp from "../../conexion";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Titulo from "./layout/ui/Titulo";
import ConteLogin from "./layout/formlogin/ConteLogin";
import LabelLogin from "./layout/formlogin/LabelLogin";
import InputLogin from "./layout/formlogin/InputLogin";
import BotonLogin from "./layout/formlogin/BotonLogin";
import FormLog2 from "./layout/formlogin/FormLog2";
import BotonRegistro from "./layout/formlogin/BotonRegistro";

/* estilos que no nos dan desde componentes */

const auth = getAuth(firebaseApp);

const Login = () => {
  const [estaRegistrandose, setEstaRegistrandose] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    const correo = e.target.userName.value;
    const contra = e.target.password.value;
    //console.log(correo,contra);
    if (estaRegistrandose) {
      //si se rgistra
      const usuario = await createUserWithEmailAndPassword(
        auth,
        correo,
        contra
      );
    } else {
      //console.log(usuario);
      //si esta iniciando sesión
      signInWithEmailAndPassword(auth, correo, contra);
    }
  }

  return (
    <Layout>
      <ConteLogin>
        <Titulo texto={estaRegistrandose ? "Registrate" : "Inicia Sesión"} />

        {/* <FormLog onSubmit={submitHandler}> */}
        <FormLog2 submitHandler={submitHandler}>
          <LabelLogin para="usuario" texto="E-mail " />
          <InputLogin tipo="email" placeh={"ingrese usuario"} iden="userName" />
          <LabelLogin para="usuario" texto=" Contraseña " />
          <InputLogin
            tipo="password"
            placeh="ingrese contraseña"
            iden="password"
          />
          <BotonLogin
            tipo="submit"
            texto={estaRegistrandose ? "Registrate" : "Inicia sesión"}
          />
        </FormLog2>
        <BotonRegistro
          setEstaRegistrandose={setEstaRegistrandose}
          estaRegistrandose={estaRegistrandose}
        />
      </ConteLogin>
    </Layout>
  );
};

export default Login;
