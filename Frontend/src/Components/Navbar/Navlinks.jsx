import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navlinks() {
  return (
      <>
      

    <NavLink to='/apple' className={`text-white text-lg mr-8 cursor-pointer`}>Gadgets and Devices</NavLink>
     
     {/* <NavLink to='/tesla' className={`text-white text-lg mr-8 cursor-pointer`}>Tesla</NavLink> */}
   
     <NavLink to='/us' className={`text-white text-lg mr-8 cursor-pointer`}>Bussiness Us</NavLink>
   
     <NavLink to='/tech' className={`text-white text-lg mr-8 cursor-pointer`}>TechCruch</NavLink>

     <NavLink to='/wallstreet' className={`text-white text-lg mr-8 cursor-pointer`}>WallStreet Journal</NavLink>
   
      </>
  )
}
