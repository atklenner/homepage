import TimeAndWeather from "./components/TimeAndWeather";
import ToDo from "./components/ToDo";
import Links from "./components/Links";
import {useState} from "react";
import LinkSettings from "./components/LinkSettings";
import ThemeSettings  from "./components/ThemeSettings";
function App() {
  const [viewSettings, setViewSettings] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-red-600 px-8 md:px-16 2xl:px-32 py-4 md:py-8 2xl:py-16">
      <div className="flex justify-center items-center h-full w-full bg-red-200 rounded-2xl px-8 md:px-16 2xl:px-32 py-4 md:py-8 2xl:py-16">
        <div className="grid lg:grid-cols-2 lg:grid-rows-4 gap-8 2xl:gap-16 h-full w-full">
          <TimeAndWeather viewSettings={viewSettings} onClick={() => setViewSettings(!viewSettings)}/>
          {viewSettings ? <LinkSettings /> : <ToDo />}
          {viewSettings ? <ThemeSettings /> : <Links />}
        </div>
      </div>
    </div>
  )
}

export default App
