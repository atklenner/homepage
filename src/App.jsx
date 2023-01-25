import TimeAndWeather from "./components/TimeAndWeather";
import ToDo from "./components/ToDo";
import Links from "./components/Links";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-red-600">
      <div className="flex justify-center items-center h-5/6 w-5/6 bg-red-200 rounded-2xl">
        <div className="grid grid-cols-2 grid-rows-4 gap-16 h-5/6 w-5/6">
          <TimeAndWeather />
          <ToDo />
          <Links />
        </div>
      </div>
    </div>
  )
}

export default App
