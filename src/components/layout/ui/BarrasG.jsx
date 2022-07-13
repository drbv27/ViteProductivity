import React,{useState,useEffect} from "react";
import { Bar } from "react-chartjs-2";
/* import { Chart as ChartJS } from "chart.js/auto"; */

function BarChart({ chartData }) {

    let datos=[
        {
            macroproceso:"Gerencia",
            cantidad:0,
        },
        {
            macroproceso:"Administrativo",
            cantidad:0,
        },
        {
            macroproceso:"Contable",
            cantidad:0,
        }
    ]
    const [userData,setUserData] = useState({
        labels: datos.map((data)=>data.macroproceso),
        datasets:[{
            label:"User Gained",
            data:datos.map((data)=>data.cantidad),

        }],
    })
    let newData =[]
    useEffect(()=>{
        new Promise((resolve,reject)=>{
            if(chartData){
                resolve(
                    newData = [
                        {
                            macroproceso:"Gerencia",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Gerencia")}).length,
                        },
                        {
                            macroproceso:"Administrativo",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Administrativo")}).length,
                        },
                        {
                            macroproceso:"Contable",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Contable")}).length,
                        },
                        {
                            macroproceso:"Innovación",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Innovación")}).length,
                        },
                        {
                            macroproceso:"Educación Tecnológica",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Educación Tecnológica")}).length,
                        },
                        {
                            macroproceso:"Jurídico",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Jurídico")}).length,
                        },
                        {
                            macroproceso:"Mercadeo y ventas",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Mercadeo y ventas")}).length,
                        },
                        {
                            macroproceso:"Soporte",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Soporte")}).length,
                        },
                        {
                            macroproceso:"Ingenieria",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Ingenieria")}).length,
                        },
                        {
                            macroproceso:"Otro",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Otro")}).length,
                        },
                        {
                            macroproceso:"Día Festivo",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Día Festivo")}).length,
                        }
                    ]
                )
            }else{
                reject("no se pudo")
            }
        }).then((response)=>{setUserData({
            labels: response.map((data)=>data.macroproceso),
            datasets:[{
                label:"cambio",
                data:response.map((data)=>data.cantidad),
    
            }],
        })})
    },[chartData])

    console.log(userData);
  return <Bar data={userData} />;
}

export default BarChart;