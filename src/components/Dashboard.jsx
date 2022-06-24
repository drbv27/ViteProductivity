import React from 'react'
import Layout from './layout/Layout'
import BarChart from './layout/ui/BarChart'
import LineChart from './layout/ui/LineChart'
import SegmentChart from './layout/ui/SegmentChart'
import SegmentChartGrandient from './layout/ui/SegmentChartGradient'


const Dashboard = () => {
  return (
    <Layout>
        <LineChart/>
        <BarChart/>
        <SegmentChart/>
        <SegmentChartGrandient/>
    </Layout>
  )
}

export default Dashboard