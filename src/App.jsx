import Widget from "./components/Block";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-red-600">
      <div className="flex justify-center items-center h-5/6 w-5/6 bg-red-200 rounded-2xl">
        <div className="grid grid-cols-2 grid-rows-2 gap-16 h-5/6 w-5/6">
          <Widget type="time"/>
          <Widget type="weather"/>
          <Widget type="links"/>
          <Widget type="to-do list"/>
        </div>
      </div>
    </div>
  )
}

export default App
