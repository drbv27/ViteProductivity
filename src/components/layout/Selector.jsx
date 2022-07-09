import React, { useState } from 'react'
import BarChart from './ui/BarChart';

const Selector = ({arrayTareas}) => {

    const [filtro,setFiltro] = useState(null)
    let ingenieria = 0
    

    async function filtrarTareas(e){
        e.preventDefault();
        const filtroI = e.target.finicio.value;
        const filtroF = e.target.ffinal.value;
        
        /* console.log(arrayTareas); */
        console.log(arrayTareas.filter((item)=>{return(item.fecha>=filtroI && item.fecha<=filtroF)}));
        const arrayFiltrado = arrayTareas.filter((item)=>{return(item.fecha>=filtroI && item.fecha<=filtroF)})
        setFiltro(arrayFiltrado)
        /* console.log(arrayFiltrado) */
        e.target.finicio.value = "";
        e.target.ffinal.value = "";
    }



   
  return (
    <div>
        <h2>Seleccionar Intervalo</h2>
        <form onSubmit={filtrarTareas}>
        <input type="date" id="finicio" />
        <input type="date" id="ffinal"/>
        <input type="submit" value="filtrar" />
        </form>
        {filtro
        ?filtro.map((item)=>{
            return(
                <p>{item.fecha}-{item.actividad}-{item.macroproceso}</p>
            )
        })
        :null}
        {filtro
        ?<h2>{filtro.filter((item)=>{
            return(
                item.macroproceso==="Ingenieria"
            )
        }).length}</h2>
        :null}

        <BarChart ingenieria={ingenieria}/>
        {console.log(ingenieria)}
        
    </div>
  )
}

export default Selector