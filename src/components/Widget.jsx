function Widget({children, type}) {
  let shortStyle = type === "short"? "row-span-2" : "row-span-4";
  return (
    <div className={`
      bg-mantle
      rounded-xl 
      overflow-auto 
      flex 
      justify-center
      items-center
      px-4
      md:px-8
      2xl:px-16
      py-2
      md:py-4
      2xl:py-8
      ${shortStyle}
    `}>
      {children}
    </div>
  )
}

export default Widget 
