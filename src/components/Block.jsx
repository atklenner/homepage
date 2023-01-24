function Block({children}) {
  return (
    <div className="bg-white py-2 px-4 rounded-lg flex justify-between">
      {children}
    </div>
  )
}

export default Block;
