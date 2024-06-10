
import React,{useState}  from 'react';
import { NavLink } from 'react-router-dom';
import Navlinks from './Navlinks';

import Burger from '../../assets/burgermy.png';


const Navbar = () => {
     const [nav,setNav] = useState(false);
   const toggleNav = () => {
          setNav(!nav);
    }

    return (
    <div className='w-full'>
    <nav className='bg-gradient-to-r from-my-nav to-black h-16 flex justify-between items-center m-0 p-0 font-bold'>
    
    <h2 className='text-blue-300 text-2xl ml-8 cursor-pointer'>MyNews</h2>

    
               <img src={Burger} alt="Open Articles" className='md:hidden block w-8 h-8' onClick={toggleNav} /> 

               <div className='hidden md:block'>{<Navlinks/>}</div>
   
                
                <div className='flex justify-between items-center bg-blue-300 h-full p-2 '>
                    <NavLink to="/" className={`text-white text-lg mr-8 cursor-pointer`}>Home </NavLink>
                    <NavLink to="/about" className='text-white text-lg mr-8 cursor-pointer'> About </NavLink>
                    
                </div>
            </nav>

            <div className={`${nav?'flex':'hidden'} border-1 items-center mt-2 pt-2 flex-col md:hidden`}>

                 <Navlinks/>

                 

            </div>
        </div>
    );
};



export default Navbar;
