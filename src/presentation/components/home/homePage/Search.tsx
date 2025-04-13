import React from 'react'
import SearchBar from '../../SearchBar'

const Search = () => {
  return (
    <div className=' shadow-md bg-white justify-center items-center '>
        <div className='w-[30%] text-center items-end sm: hidden md:w-[100%]'>
        <SearchBar/>
        </div>
    </div>

  )
}

export default Search