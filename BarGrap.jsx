import React from 'react'
import { ResponsiveContainer,BarChart,XAxis,YAxis, Line,Tooltip,Legend,CartesianGrid, Bar} from 'recharts'


let saledata2=[

    {month:"jan",sale:700 ,sale2:500},
    {month:"FEb",sale:100,sale2:300},
    {month:"march",sale:600 ,sale2:100},
    {month:"apl",sale:100, sale2:700},
]
const BarGrap = () => {


  return (
    <div style={{
          
        backgroundColor:"black",
        height:"500px",
        width:"50%"
    }}>
              <ResponsiveContainer>
                     <BarChart data={saledata2}>
                             <XAxis dataKey="month"></XAxis>
                             <YAxis dataKey="sale"></YAxis>
                             {/* <Line dataKey="sale" type="monotone" stroke='red' strokeWidth="2"></Line> */}
                             <Bar dataKey="sale" stroke='red'fill='orange' ></Bar>
                             <Bar dataKey="sale2" stroke='red' fill='bisque'></Bar>
                             <Tooltip></Tooltip>
                            <Legend></Legend>
                     </BarChart>
              </ResponsiveContainer>
       
    </div>
  )
}

export default BarGrap
