import Widget from "./Widget";
import Time from "./Time";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGear } from "@fortawesome/free-solid-svg-icons";
import { useSettings } from "../context/SettingsContext";

const API_KEY = "d6033a7a4a4fb3ac4ada99b04bd0f8e4";

function TimeAndWeather({ onClick, viewSettings }) {
  const settings = useSettings();

  const [temp, setTemp] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((weather) => setTemp(weather.main.temp));
    });
  }, []);

  function formatTemp(temp) {
    if (!temp) {
      return "";
    }
    switch (settings.unit) {
      case "fahrenheit":
        let fahrenheit = 1.8 * (temp - 273.15) + 32;
        return `${Math.round(fahrenheit * 10) / 10}°F`;
      case "celsius":
        let celsius = temp - 273.15;
        return `${Math.round(celsius * 10) / 10}°C`;
      case "kelvin":
        return `${Math.round(temp * 10) / 10}°K`;
      default:
        throw new Error("Unknown temperature unit");
    }
  }

  return (
    <Widget type="short">
      <div className="flex flex-col justify-evenly  items-center text-center h-full w-full">
        <Time />
        <p className="text-4xl md:text-5xl font-bold">{formatTemp(temp)}</p>
        <button name="settings" onClick={onClick}>
          <FontAwesomeIcon
            title={viewSettings ? "Hide settings menu" : "Show settings menu"}
            icon={viewSettings ? faHome : faGear}
          />
          <span className="sr-only">{`${
            viewSettings ? "Hide" : "Show"
          } settings menu`}</span>
        </button>
      </div>
    </Widget>
  );
}

export default TimeAndWeather;
