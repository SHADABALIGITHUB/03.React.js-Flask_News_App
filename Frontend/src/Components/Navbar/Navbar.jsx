import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full'>
            <nav className='bg-gradient-to-t from-highdark to-extradark h-16 flex justify-between items-center m-0 p-0 font-bold'>
                <NavLink to="/" className='text-white text-2xl ml-8 cursor-pointer'>MyNews</NavLink>
                <div className='flex justify-between items-center'>
                    <NavLink to="/" className='text-white text-lg mr-8 cursor-pointer'>Home </NavLink>
                    <NavLink to="/about" className='text-white text-lg mr-8 cursor-pointer'> About </NavLink>
                    <NavLink to="/contact"className='text-white text-lg mr-8 cursor-pointer'>Contact </NavLink>
                </div>
            </nav>
        </div>
    );
};



export default Navbar;
