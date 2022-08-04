import {createContext,useContext} from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './App'
import Dashboard from './components/Dashboard';
import PruebaRutas from './components/PruebaRutas';
import useFirebaseAuth from './services/useFirebaseAuth';
import './index.css'

/* const usuarioGlobal = useFirebaseAuth()

export const Contexto = createContext(null)
export const Provider = (props)=>{
  return(
    <Contexto.Provider value={usuarioGlobal}>
      {props.children}
    </Contexto.Provider>
  )
} */

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Routes>
      <Route exact path="/dash" element={<Dashboard/>}/>
      <Route exact path="/" element={<App />}/>
    </Routes>
  </BrowserRouter>


)
