function Widget({children, type}) {
  let shortStyle = type === "short"? "row-span-2" : "row-span-4";
  return (
    <section className={`
      bg-mantle
      rounded-xl 
      overflow-auto 
      flex 
      justify-center
      items-start
      lg:items-center
      px-4
      md:px-8
      2xl:px-12
      py-2
      md:py-4
      2xl:py-6
      ${shortStyle}
    `}>
      {children}
    </section>
  )
}

export default Widget 
