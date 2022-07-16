import React, { useState } from 'react'
import data from '../../data/data';
import BarChart from './ui/BarChart';
import BarrasG from './ui/BarrasG';
import {UserData} from './ui/Data'

const Selector = ({arrayTareas}) => {

    const [filtro,setFiltro] = useState(null)
    const [userData,setUserData] = useState({
        labels: UserData.map((data)=>data.year),
        datasets:[{
            label:"User Gained",
            data:UserData.map((data)=>data.userGain),

        }],
    })
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
        <h2>Reporte: seleccione un intervalo</h2>
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

       {/*  <BarChart ingenieria={ingenieria}/> */}
        {/* <BarrasG chartData={userData}/> */}
        <BarrasG chartData={arrayTareas}/>
        {console.log(ingenieria)}
        
    </div>
  )
}

export default Selector