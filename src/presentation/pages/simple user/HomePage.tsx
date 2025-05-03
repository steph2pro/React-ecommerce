import React from 'react'
import NavBare from './components/NavBare'
import Banner from './Pages/banner/Banner'
import Delivery from './Pages/delivrry/Delivery'
import Brand from './components/brands/Brand'
import Features from './components/features/Features'

const HomePage = () => {
  return (
    <div>
        <NavBare/>

        <div className="w-full min-h-[850px] flex items-center justify-center rounded-b-3xl">
          <Banner>
    
          </Banner>
        </div>

        {/* Deliver */}

        <div className=" deliver_component w-full min-h-[#150px] bg-white ">
          <Delivery></Delivery>
        </div>


        {/* Brand Component */}
        <div className="brand flex items-center justify-center w-full mt-2 mb-8 h-[172px]">
          <Brand></Brand>
        </div>
        <div className='w-full flex items-center justify-center'>
          <Features></Features>
        </div>
    </div>
  
  )
}

export default HomePage