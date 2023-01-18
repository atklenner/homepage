function Block({children}) {
  return (
    <div className="bg-white py-2 px-4 m-2 rounded-lg w-5/6 flex justify-between">
      {children}
    </div>
  )
}

export default Block;
