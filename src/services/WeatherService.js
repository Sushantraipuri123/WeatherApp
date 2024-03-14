import { DateTime } from "luxon";

const API_KEY = "37e4710446e86b83da991bdc7bcab3f1";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = async (infoType, searchParam) => {
  const url = new URL(`${BASE_URL}/${infoType}`);
  url.search = new URLSearchParams({ ...searchParam, appid: API_KEY });

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },

    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sumset },
    weather,
    wind: { speed }
  } = data

  const { main: details, icon } = weather[0]

  return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sumset, details, icon, speed }
}


const formatForecastWeather = (data)=>{
  let { timezone, daily, hourly}  = data;
  daily= daily.slice(1,6).map(d =>{
    return{
      title: formatToLocalTime(d.dt, timezone, 'ccc'),
      temp: d.temp.day,
      icon: d.weather[0].icon
    }
  })

  hourly= daily.slice(1,6).map(d =>{
    return{
      title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
      temp: d.temp.day,
      icon: d.weather[0].icon
    }
  })

  return{timezone, daily, hourly}
}

const getFormatedWeatherData = async (searchParam) => {
  const formatedCurrentWeather = await getWeatherData("weather", searchParam)
    .then(formatCurrentWeather);


  const { lat, lon } = formatedCurrentWeather

  const formatedForecastWeather = await getWeatherData('oncall', {
    lat, lon, exclude: 'current, minutely, alerts', units: searchParam.units
  }).then(formatForecastWeather)

  return {...formatedCurrentWeather, ...formatedForecastWeather}
}


const formatToLocalTime = (secs, zone, format="cccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format)

export default getFormatedWeatherData;