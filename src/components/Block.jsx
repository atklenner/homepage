import Time from "./Time";

function Block({type}) {
  return (
    <div className="bg-red-50 rounded-xl">
      {type} block component
      {type === "time" && <Time />}
    </div>
  )
}

export default Block
