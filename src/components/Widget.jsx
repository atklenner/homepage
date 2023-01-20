function Widget({children, type}) {
  let shortStyle = type === "short"? "row-span-1" : "row-span-3";
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
