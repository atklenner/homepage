import {useState, useEffect} from "react";

function Time() {
  let [time, setTime] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return (() => {
      clearInterval(timer);
    })
  })
  return (
    <p>{time.toLocaleTimeString()}</p>
  )
}

export default Time;
