import React from 'react'
import NavBare from './components/NavBare'
import Banner from './Pages/banner/Banner'

const HomePage = () => {
  return (
    <div>
        <NavBare/>

        <div className="w-full min-h-[850px] flex items-center justify-center bg-[#f0f2f3]">
          <Banner>

          </Banner>
        </div>
    </div>
  
  )
}

export default HomePage