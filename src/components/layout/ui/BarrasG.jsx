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
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Gerencia")}).map((item2)=>item2.total).reduce((prev,curr)=>prev+curr,0)/60,
                        },
                        {
                            macroproceso:"Administrativo",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Administrativo")}).map((item2)=>item2.total).reduce((prev,curr)=>prev+curr,0)/60,
                        },
                        {
                            macroproceso:"Contable",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Contable")}).map((item2)=>item2.total).reduce((prev,curr)=>prev+curr,0)/60,
                        },
                        {
                            macroproceso:"Innovación",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Innovación")}).map((item2)=>item2.total).reduce((prev,curr)=>prev+curr,0)/60,
                        },
                        {
                            macroproceso:"Educación Tecnológica",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Educación Tecnológica")}).map((item2)=>item2.total).reduce((prev,curr)=>prev+curr,0)/60,
                        },
                        {
                            macroproceso:"Jurídico",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Jurídico")}).map((item2)=>item2.total).reduce((prev,curr)=>prev+curr,0)/60,
                        },
                        {
                            macroproceso:"Mercadeo y ventas",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Mercadeo y ventas")}).map((item2)=>item2.total).reduce((prev,curr)=>prev+curr,0)/60,
                        },
                        {
                            macroproceso:"Soporte",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Soporte")}).map((item2)=>item2.total).reduce((prev,curr)=>prev+curr,0)/60,
                        },
                        {
                            macroproceso:"Ingenieria",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Ingenieria")}).map((item2)=>item2.total).reduce((prev,curr)=>prev+curr,0)/60,
                        },
                        {
                            macroproceso:"Otro",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Otro")}).map((item2)=>item2.total).reduce((prev,curr)=>prev+curr,0)/60,
                        },
                        {
                            macroproceso:"Día Festivo",
                            cantidad:chartData.filter((item)=>{return(item.macroproceso==="Día Festivo")}).map((item2)=>item2.total).reduce((prev,curr)=>prev+curr,0)/60,
                        }
                    ]
                )
            }else{
                reject("no se pudo")
            }
        }).then((response)=>{setUserData({
            labels: response.map((data)=>data.macroproceso),
            datasets:[{
                label:"Horas",
                data:response.map((data)=>data.cantidad),
                backgroundColor:["rgba(16,151,213,0.4)","rgba(129,183,31,0.4)"],
                borderColor:["#1097d5","#81b71f"],
                borderWidth:2
    
            }],
        })})
    },[chartData])

    /* console.log(userData); */
  return <Bar data={userData} />;
}

export default BarChart;