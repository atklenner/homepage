import Widget from "./Widget";
import Time from "./Time";
import {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faGear} from "@fortawesome/free-solid-svg-icons";

const API_KEY = "d6033a7a4a4fb3ac4ada99b04bd0f8e4";

function TimeAndWeather({onClick, viewSettings}) {
  
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
        <Time />
        <p className="text-3xl lg:text-5xl font-bold">{formatTemp(temp)}</p>
        <button name="settings" onClick={onClick}>
          <FontAwesomeIcon title={viewSettings ? "Hide settings menu" : "Show settings menu"} icon={viewSettings ? faHome : faGear} />
          <span className="sr-only">{`${viewSettings ? "Hide" : "Show"} settings menu`}</span>
        </button>
      </div>
    </Widget>
  )
}

export default TimeAndWeather;
