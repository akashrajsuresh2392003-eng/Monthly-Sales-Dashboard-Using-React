import React from 'react'
import { Outlet } from 'react-router-dom'
import { ResponsiveContainer,LineChart,XAxis,YAxis, Line,Tooltip,Legend,CartesianGrid} from 'recharts'
import "./line.css"

let saledata=[
     
    {month:"jan",sale:700 ,sale2:500},
    {month:"FEb",sale:100,sale2:300},
    {month:"march",sale:600 ,sale2:100},
    {month:"apl",sale:100, sale2:700},
]

const LineGrap = () => {
  return (
    <div style={{
          
        backgroundColor:"bisque",
        height:"500px",
        width:"50%",
        // padding:"200px"
        margin:"100px",
        // marginRight:"100%"
    }}>
                 <ResponsiveContainer>
                     <LineChart data={saledata}>
                                 <CartesianGrid></CartesianGrid>
                                <XAxis dataKey="month"></XAxis>
                                <YAxis dataKey="sale"></YAxis>
                                <Line dataKey="sale" type="monotone" stroke='red' strokeWidth="2"></Line>
                                <Line dataKey="sale2" type="monotone" stroke='orange' strokeWidth="2"></Line>
                                
                                <Tooltip></Tooltip>
                                <Legend></Legend>
                     </LineChart>
                 </ResponsiveContainer>
    </div>
  )
}

export default LineGrap
