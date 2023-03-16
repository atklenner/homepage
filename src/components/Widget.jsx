function Widget({ children, type }) {
  let shortStyle = type === "short" ? "row-span-2" : "md:row-span-4 grow";
  return (
    <section
      className={`
      bg-mantle
      rounded-xl 
      flex 
      justify-center
      px-4
      md:px-4
      2xl:px-12
      py-2
      md:py-4
      2xl:py-6
      overflow-auto
      ${shortStyle}
    `}
    >
      {children}
    </section>
  );
}

export default Widget;
