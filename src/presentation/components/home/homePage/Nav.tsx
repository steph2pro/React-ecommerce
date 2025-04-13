import React, { useState } from 'react'
import { X } from 'react-bootstrap-icons';
import { MenuAppFill } from 'react-bootstrap-icons';

const Nav = () => {
    const [mobilDrawerOper,setMobilDrawerOper] = useState(false);
    const toggleNavBar = () =>{
        setMobilDrawerOper(!mobilDrawerOper);
    }
  return (
   <nav className='sticky top-0 z-50 py-3 bg-white shadow-md'>
    <div className="container px-4 mx-auto tex-sm">
        <div className="flex justify-between items-center">
            <div className="flex item-center flex-shrink-0">
                <img src="" alt="" />
                <span className='span text-xl tracking-tight-0'>TechMarket</span>
            </div>

            <ul className='hidden lg:flex ml-14 space-x-12'>
                <li>Acceuil</li>
                <li>Articles</li>
                <li>Categories</li>
            </ul>

            <div className="hidden lg:flex justify-center space-x-12 items-center">
                <a href="#" className='py-2 px-3 rounded-md'>
                    Sign In
                </a>
                <a href="#" className='py-2 px-3 rounded-md bg-gradient-to-tr from-orange-500 to-orange-700'>
                  Create An Account
                </a>
            </div>
            <div className='lg:hidden md:flex flex-col justify-end'>
                <button onClick={toggleNavBar}>
                    {mobilDrawerOper?<X/>:<MenuAppFill/>}
                </button>
            </div>
        </div>
        {mobilDrawerOper &&(
            <div className='fixed right-0 z-20 bg-neutral-950 w-full p-1 flex flex-col justify-start lg:hidden'>
                <ul className='text-white'>
                    <li>Acceuil</li>
                    <li>Articles</li>
                    <li>Categories</li>
                </ul>
                <div className="flex space-x-6 text-center justify-center">
                    <a href="" className='py-2 px-3 border border-md text-white'>Sign In</a>
                    <a href="#" className='py-2 px-3 rounded-md bg-gradient-to-tr from-orange-500 to-orange-700'>
                         Create An Account
                     </a>
                </div>
            </div>
        )}
    </div>
   </nav>
  )
}

export default Nav