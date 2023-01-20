import Widget from "./Widget";
import {useState, useEffect} from "react";

function Time() {
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
  return (
    <Widget type="short">
      <div>
      <p className="text-4xl font-bold">{time.toLocaleTimeString()}</p>
      <p className="text-lg text-center">{time.toLocaleDateString("en-US", options)}</p>
      </div>
    </Widget>
  )
}

export default Time;