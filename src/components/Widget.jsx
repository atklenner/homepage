function Widget({ children, type }) {
  let shortStyle =
    type === "short" ? "row-span-2 basis-1/4" : "md:row-span-4 basis-1/2";
  return (
    <section
      className={`
      bg-mantle
      rounded-xl 
      flex 
      justify-center
      items-center
      px-4
      md:px-4
      2xl:px-12
      py-2
      md:py-4
      2xl:py-6
      grow-0
      overflow-auto
      ${shortStyle}
    `}
    >
      {children}
    </section>
  );
}

export default Widget;
