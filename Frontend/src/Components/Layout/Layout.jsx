import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Layout = () => {
  return (
    <div className='w-screen bg-light flex flex-col items-center justify-center'>

     
        <Navbar/>
      
           
        <Outlet/>
      
     

      
    </div>
  )
}

export default Layout
