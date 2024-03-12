import { useState } from 'react'
import './App.css'
import TopButton from './component/TopButton';
import Inputs from './component/Inputs';
import TimeLocaation from './component/TimeLocaation';
import TemperatureDetails from './component/TemperatureDetails';
import Forecast from './component/Forecast';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
    className=' mx-auto px-14 max-w-screen-md py-4 px-auto  mt-3  bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 '
    >
      <TopButton/>
      <Inputs/>

      <TimeLocaation/>
      <TemperatureDetails/>
      <Forecast title="hourly forecast"/>
      <Forecast title="daily forecast"/>
    </div>
  )
}

export default App
