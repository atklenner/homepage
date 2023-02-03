import {useState, useEffect} from "react";

function Time() {

  let [time, setTime] = useState(new Date());

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const locale = window.navigator.languages[0];

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return (() => {
      clearInterval(timer);
    })
  })

  return (
    <div>
      <p className="text-3xl lg:text-5xl font-bold">{time.toLocaleTimeString()}</p>
      <p className="lg:text-xl">{time.toLocaleDateString(locale, dateOptions)}</p>
    </div>
  )
}

export default Time;
