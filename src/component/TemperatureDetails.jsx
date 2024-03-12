import React from 'react'
import { FaTemperatureFull } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { LuSunrise } from "react-icons/lu";
import { LuSunset } from "react-icons/lu";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { LiaTemperatureLowSolid } from "react-icons/lia";



function TemperatureDetails() {
  return (
    <div>
      <div className=' flex items-center justify-center py-6 text-xl text-cyan-300'>
       <p className=' capitalize'>cloudy</p>
      </div>

      <div className="flex flex-row items-center justify-around text-white py-3">
        <img src="https://atlas-content-cdn.pixelsquid.com/assets_v2/223/2238636997985965097/jpeg-600/G03.jpg?modifiedAt=1" alt=""  className=' w-20'/>
        <p className=' text-5xl'>
             30 &deg;
        </p>
        <div className=' flex flex-col space-y-2'>

            <div className=' flex font-light text-sm items-center justify-center'>
            <FaTemperatureFull  size={18} className=' me-1'/>
            Real feel:
            <span className=' ml-1 font-medium'>32 &deg;</span>
            </div>
            
            <div className=' flex font-light text-sm items-center justify-center'>
            <WiHumidity  size={18} className=' me-1'/>
             Humidity:
            <span className=' ml-1 font-medium'>65%</span>
            </div>
            
            <div className=' flex font-light text-sm items-center justify-center'>
            <FiWind  size={18} className=' me-1'/>
            Wind:
            <span className=' ml-1 font-medium'>11 km/h</span>
            </div>
        </div>
      </div>

      <div className=' flex flex-row items-center justify-center space-x-2 text-white text-sm py-3 '>

      <LuSunrise/>
         <p className=' font-light'>
            Rise: <span className=' font-medium ml-1'>4:20 AM</span>
         </p>
         <p className=' font-light'>|</p>
         
      <LuSunset  />
         <p className=' font-light'>
            Set: <span className=' font-medium ml-1'>7:20 PM</span>
         </p>
         <p className=' font-light'>|</p>
         
      <LiaTemperatureHighSolid  />
         <p className=' font-light'>
            High: <span className=' font-medium ml-1'>45 &deg;</span>
         </p>
         <p className=' font-light'>|</p>
            
      <LiaTemperatureLowSolid   />
         <p className=' font-light'>
            Low: <span className=' font-medium ml-1'>25 &deg;</span>
         </p>
         
      </div>
    </div>
  )
}

export default TemperatureDetails
