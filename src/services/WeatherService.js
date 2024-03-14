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
    sys: { country, sunrise, sunset }, // Fixed typo in sunset
    weather,
    wind: { speed }
  } = data;

  const { main: details, icon } = weather[0];

  return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed };
};

const formatDailyHourlyWeather = (data, timezone) => {
  let { daily, hourly } = data;
  
  const formatToLocalTime = (secs, format="cccc, dd LLL yyyy' | Local time: 'hh:mm a") =>
    DateTime.fromSeconds(secs).setZone(timezone).toFormat(format);

  daily = daily.slice(1, 6).map(d => ({
    title: formatToLocalTime(d.dt),
    temp: d.temp.day,
    icon: d.weather[0].icon
  }));

  hourly = hourly.slice(1, 6).map(h => ({
    title: formatToLocalTime(h.dt, 'hh:mm a'),
    temp: h.temp,
    icon: h.weather[0].icon
  }));

  return { daily, hourly };
};

const getFormattedWeatherData = async (searchParam) => {
  const formattedCurrentWeather = await getWeatherData("weather", searchParam).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData('forecast', {
    lat, lon, exclude: 'current,minutely,alerts', units: searchParam.units
  }).then(data => formatDailyHourlyWeather(data, searchParam.timezone));

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

export default getFormattedWeatherData;
