import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";


function Inputs() {
  return (
    <div className='flex flex-wrap flex-row justify-center my-5'>
        <div className=' flex flex-row w-3/4 items-center justify-center space-x-4'>
      <input type="search" className=' p-2 text-lg font-light focus:outline-none w-full shadow-xl capitalize placeholder:lowercase' 
      placeholder='Search city name...'
      name="" id="" />
      <IoMdSearch size={40} className=' text-white cursor-pointer  transition  ease-out hover:scale-125' />
      <FaLocationDot size={25} className=' text-white cursor-pointer transition  ease-out hover:scale-125 ' />
        </div>

        <div
        className=' flex flex-row w-1/4 justify-center items-center'
        >
            <button name='matrix' className='text-xl text-white font-light'>&deg; C</button>
            <p className=' text-xl text-white mx-2'>|</p>
            <button name='imperial' className='text-xl text-white font-light'>F</button>

        </div>
    </div>
  )
}

export default Inputs
