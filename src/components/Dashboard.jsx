import React from 'react'
import Layout from './layout/Layout'
import BarChart from './layout/ui/BarChart'
import LineChart from './layout/ui/LineChart'


const Dashboard = () => {
  return (
    <Layout>
        <LineChart/>
        <BarChart/>
    </Layout>
  )
}

export default Dashboard