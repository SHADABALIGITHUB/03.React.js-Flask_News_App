import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
// import BackgroundImage from '../../assets/bg_news.jpg';


const Layout = () => {
  return (
    <div className='w-screen flex flex-col items-center justify-center '>

       

     
        <Navbar/>
      
      
           
        <Outlet/>

      

      
    </div>
  )
}

export default Layout
