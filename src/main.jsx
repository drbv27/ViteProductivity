import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './App'
import PruebaRutas from './components/PruebaRutas';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/prueba" element={<PruebaRutas />}/>
      <Route exact path="/" element={<App />}/>
    </Routes>
  </BrowserRouter>
)
