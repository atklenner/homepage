import Widget from "./Widget";
import {useState, useEffect} from "react";

const API_KEY = "d6033a7a4a4fb3ac4ada99b04bd0f8e4";

function TimeAndWeather() {
  let [time, setTime] = useState(new Date());

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return (() => {
      clearInterval(timer);
    })
  })
  
  const [temp, setTemp] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_KEY}`)
        .then((res) => res.json())
        .then((weather) => setTemp(weather.main.temp))
    })
  }, []);

  function formatTemp(temp) {
    if (!temp) {
      return "";
    }
    let fahrenheit = 1.8 * (temp - 273.15) + 32;
    return `${Math.trunc(fahrenheit * 10) / 10}°F`;
  }

  return (
    <Widget type="short">
      <div className="flex flex-col md:flex-row lg:flex-col justify-evenly  items-center text-center h-full w-full">
        <div>
          <p className="text-3xl lg:text-5xl font-bold">{time.toLocaleTimeString()}</p>
          <p className="lg:text-xl">{time.toLocaleDateString("en-US", options)}</p>
        </div>
        <p className="text-3xl lg:text-5xl font-bold">{formatTemp(temp)}</p>
      </div>
    </Widget>
  )
}

export default TimeAndWeather;
