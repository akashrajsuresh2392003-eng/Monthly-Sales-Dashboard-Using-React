import React from 'react'
import { ResponsiveContainer,PieChart,Pie, Tooltip, Legend, Cell } from 'recharts'

let saledata3=[

    {name:"jan",sale:200 ,sale2:500},
    {name:"FEb",sale:100,sale2:300},
    {name:"march",sale:600 ,sale2:100},
    {name:"apl",sale:100, sale2:700},
]

let colour=["red","yellow","green","orange"]

const Piechart = () => {
  return (
    <div style={{
          
        width:"500px",
        height:"500px",
        // backgroundColor:"orange"
        // width:"500px",
        // borderRadius:"50%"
    }}>
             <ResponsiveContainer>
                      <PieChart>
                          <Pie data={saledata3} outerRadius="200" dataKey="sale" cx="50%" cy="50%" innerRadius="70">
                            {
                                        saledata3.map((e,i)=>{
                                             
                                           return <Cell key={i} fill={colour[i]}></Cell>
                                        })
                            }
                          </Pie>
                          <Pie data={saledata3} outerRadius="200" dataKey="month">
                                

                          </Pie>
                          {/* <Pie data={saledata3} outerRadius="200" dataKey="sale2"> */}
                                

                          {/* </Pie> */}
                          <Tooltip></Tooltip>
                          <Legend></Legend>
                      </PieChart>
             </ResponsiveContainer>
    </div>
  )
}

export default Piechart
