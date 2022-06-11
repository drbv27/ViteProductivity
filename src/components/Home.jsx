import React from 'react'
import Layout from './layout/Layout'

const Home = ({usuario}) => {
  //console.log(usuario.email);
  return (
    <Layout usuario={usuario.email}>
      <h1>HOME</h1>
    </Layout>
  )
}

export default Home