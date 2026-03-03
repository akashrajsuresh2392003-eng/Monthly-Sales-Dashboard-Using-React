import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Nav from './Nav'
import LineGrap from './LineGrap'
import BarGrap from './BarGrap'
import Piechart from './Piechart'
import "./App.css"

let myRouter=createBrowserRouter([{

     path:"",
     element:<Nav></Nav>,
     children:[{
           
      index:true,
      element:<LineGrap></LineGrap>
     },{
            path:"bar",
            element:<BarGrap></BarGrap>
     },{
            path:"pie",
            element:<Piechart></Piechart>
     }]
}])

const App = () => {
  return (
    <div className='ak'>
               <RouterProvider router={myRouter}>

               </RouterProvider>
    </div>
  )
}

export default App
