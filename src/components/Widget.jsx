function Widget({children, type}) {
  let shortStyle = "";
  if (type === "short") {
    shortStyle = "h-1/2"; // this is not what I want
  }
  return (
    <div className={`
      bg-red-100 
      rounded-xl 
      overflow-auto 
      flex 
      justify-center
      items-center
      ${shortStyle}
    `}>
      {children}
    </div>
  )
}

export default Widget 
