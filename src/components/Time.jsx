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
    <div>
      <p className="text-3xl lg:text-5xl font-bold">{time.toLocaleTimeString()}</p>
      <p className="lg:text-xl">{time.toLocaleDateString("en-US", options)}</p>
    </div>
  )
}

export default Time;
