import {useEffect,useState} from 'react'
import Layout from './layout/Layout'
import Selector from './layout/Selector'
import BarChart from './layout/ui/BarChart'
import LineChart from './layout/ui/LineChart'
import SegmentChart from './layout/ui/SegmentChart'
import SegmentChartGrandient from './layout/ui/SegmentChartGradient'
import useFirebaseAuth from '../services/useFirebaseAuth'
import useDataUser from "../Hooks/useDataUser";




const Dashboard = () => {

  const [userData,setUserData] = useState([])

  const usuario = useFirebaseAuth()

  let newUser;
  useEffect(()=>{
    new Promise((resolve,reject)=>{
        if(usuario){
            resolve(
              newUser = usuario
            )
        }else{
            reject("no se pudo dash")
        }
    }).then((response)=>{

      setUserData(response)
      
      
    })
  },[usuario])
  
  const {arrayTareas,correoUsuario,setArrayTareas} = useDataUser(userData)

  console.log("array tareas",arrayTareas);
  console.log("email:",correoUsuario);
  

  
  /* console.log("prueba",usuario); */
  return (
    <Layout usuario={correoUsuario}>
        <Selector arrayTareas={arrayTareas}/>
        
{/*         <LineChart/>
        <BarChart/>
        <SegmentChart/>
        <SegmentChartGrandient/> */}
    </Layout>
  )
}

export default Dashboard