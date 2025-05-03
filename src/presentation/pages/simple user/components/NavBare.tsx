import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import HomePage from '../HomePage'
import { Armchair, Check, Heart, Info, Menu, Search, ShoppingCart, User } from 'lucide-react'

const NavBare = () => {
  return (
    <>
    {/* navbar top */}
      <div className='navbar_top flex items-center justify-center bg-[#272343] h-[45px] w-full '>
        <div className='lg:container flex justify-between items-center'>
        
         <p className=' flex items-center gap-2 text-sm font-inter font-normal text-white capitalize'><Check/> Free on all orders $50</p>

         <div className="nav_to_right flex items-center gap-6">
          <select defaultValue="Server location" className=" bg-transparent h-[30px] w-[70px]  text-sm font-inter font-normal capitalize text-white outline-0">
              <option>eng</option> 
              <option>Bangla</option>
          </select>

          <button><Link to=''  className='text-white font-inter font-normal text-sm'>Faqs</Link></button>
          <button ><Link to='' className='text-white font-inter font-normal text-sm flex'><Info/>Need Help</Link></button>
         </div>

        
        </div>
      </div>

     {/* navbar middle */}

     <div className="navbar_middle flex items-center justify-between bg-[#f0f2f3] w-full h-[84px] shadow-lg" >
      <div className="container grid grid-cols-3 justify-items-start items-center">

        <div className="logo_wrapper">
          <Link to="" className='text-3xl text-black font-inter font-medium capitalize flex items-center gap-2 justify-center'>
            <Armchair size="2rem" color='#029fae'/>
            <span className='text-3xl text-black font-bold'>TechMarket</span>
          </Link>
        </div>

        <div className="search_box">
          <form action="#" className='max-w-[443px] h-[44px] relative'>
            <input type="text" placeholder='Search here ...'  className='max-w-[443px] h-full bg-white rounded-lg outline-none pl-4'/>
            <button className='absolute to-50% right-4 translate-y-1/2 mt-1'><Search size={23} color='#272343'/></button>
          </form>
        </div>

             {/* navbar middle right */}

            <div className="navbar_middle_right flex items-center gap-6">
              <button className="btn">
                  <ShoppingCart/><div className="badge badge-sm bg-[#029fae] text-white">2</div>
              </button>
              <button className="btn">
                <Heart/>
              </button>

              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1"><User/></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li><a>Account</a></li>
                  <li><a>Logout</a></li>
                </ul>
            </div>
            </div>
      </div>
     </div>

{/* navbar buttom */}

    <div className="navbar_bottom flex items-center justify-center w-full h-[75px] bg-white border-b-[1px] border-[#e1e3e5]">
      <div className="lg:container flex iitems-center justify-between">

        <div className="navbar_bottom_left flex items-center gap-8 capitalize" >

          <div className="dropdown dropdown-start">
              <div tabIndex={0} role="button" className="btn m-1"> <Menu/> All Categories</div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a>Unite Centrale</a></li>
                <li><a>Moniteurs</a></li>
                <li><a>Laptop</a></li>
                <li><a>Telephones</a></li>
              </ul>
          </div>

            <nav className='flex items-center gap-8'                                                                                                         >
              <NavLink to='/' className='text-sm text-[#029fae] font-inter font-medium capitalize'>Home</NavLink>
              <NavLink to='/' className='text-sm text-[#636270] font-inter font-medium capitalize'>Shop</NavLink>
              <NavLink to='/' className='text-sm text-[#636270] font-inter font-medium capitalize'>Product</NavLink>
              <NavLink to='/' className='text-sm text-[#636270] font-inter font-medium capitalize'>Pages</NavLink>
              <NavLink to='/' className='text-sm text-[#636270] font-inter font-medium capitalize'>About</NavLink>
          </nav>
        </div>

        {/* navbar_bottom_right */}

        <div className="navbar_bottom_right">
          <p className='text-sm text-[#636270] font-inter font-normal capitalize '>Contact <span className='text-[#272343]'>(+237) 672259656</span></p>
        </div>
      </div>
    </div>
</>
  )
}

export default NavBare