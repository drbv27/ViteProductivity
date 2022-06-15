import React from "react";
import Layout from "./layout/Layout";
import FormRegistro from "./layout/FormRegistro";
const Home = ({ usuario }) => {
  //console.log(usuario.email);
  return (
    <Layout usuario={usuario.email}>
      <FormRegistro />
    </Layout>
  );
};

export default Home;
