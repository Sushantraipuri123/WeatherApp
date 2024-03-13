// const API_KEY="37e4710446e86b83da991bdc7bcab3f1"
// const BASE_URL="https://api.openweathermap.org/data/2.5"


// const getWeatherData =(infoType, searchParam)=>{
//    const url = new URL(BASE_URL +  "/" + infoType)
//    url.search= new URLSearchParams({...searchParam, addid:API_KEY});

//    return fetch(url)
//    .then((res)=>res.json())
//    .then((data)=>data)
// } ;

// export default  getWeatherData;




import { useState, useEffect } from "react";

function WeatherServise(city){
   const [data, setData] = useState({})
   useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?q={city}&appid=37e4710446e86b83da991bdc7bcab3f1")
    .then((res)=>res.json())
    .then((res)=>setData(res[city]))
   }, [city])
   
   console.log(data)
   return data
}


export default WeatherServise;