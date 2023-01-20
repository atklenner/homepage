function Widget({children, type}) {
  let shortStyle = type === "short"? "row-span-2" : "row-span-4";
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
