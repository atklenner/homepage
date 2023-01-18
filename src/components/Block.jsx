import Time from "./Time";

function Widget({type}) {
  return (
    <div className="bg-red-50 rounded-xl">
      {type === "time" && <Time />}
    </div>
  )
}

export default Widget 
