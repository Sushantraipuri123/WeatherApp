import React from 'react'

function Forecast(props) {
  return (
    <div>
      <div className=' flex items-center justify-start  mt-6'>
        <p className=' text-white font-medium uppercase'>{props.title}</p>
      </div>
      <hr  className=' my-2'/>
      <div className=' flex flex-row items-center justify-between text-white'>

        <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>
                4:30PM
            </p>
            <img src="https://atlas-content-cdn.pixelsquid.com/assets_v2/223/2238636997985965097/jpeg-600/G03.jpg?modifiedAt=1" alt=""  className=' w-12 my-1'/>
            <p className=' font-medium'>22 &deg;</p>
        </div>

        <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>
                4:30PM
            </p>
            <img src="https://atlas-content-cdn.pixelsquid.com/assets_v2/223/2238636997985965097/jpeg-600/G03.jpg?modifiedAt=1" alt=""  className=' w-12 my-1'/>
            <p className=' font-medium'>22 &deg;</p>
        </div>

        <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>
                4:30PM
            </p>
            <img src="https://atlas-content-cdn.pixelsquid.com/assets_v2/223/2238636997985965097/jpeg-600/G03.jpg?modifiedAt=1" alt=""  className=' w-12 my-1'/>
            <p className=' font-medium'>22 &deg;</p>
        </div>

        <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>
                4:30PM
            </p>
            <img src="https://atlas-content-cdn.pixelsquid.com/assets_v2/223/2238636997985965097/jpeg-600/G03.jpg?modifiedAt=1" alt=""  className=' w-12 my-1'/>
            <p className=' font-medium'>22 &deg;</p>
        </div>

        <div className=' flex flex-col items-center justify-center'>
            <p className=' font-light text-sm'>
                4:30PM
            </p>
            <img src="https://atlas-content-cdn.pixelsquid.com/assets_v2/223/2238636997985965097/jpeg-600/G03.jpg?modifiedAt=1" alt=""  className=' w-12 my-1'/>
            <p className=' font-medium'>22 &deg;</p>
        </div>

      </div>
    </div>
  )
}

export default Forecast
