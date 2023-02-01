import TimeAndWeather from "./components/TimeAndWeather";
import ToDo from "./components/ToDo";
import Links from "./components/Links";
import {useState} from "react";
import LinkSettings from "./components/LinkSettings";
import GeneralSettings  from "./components/GeneralSettings";
import { LinksProvider } from "./context/LinksContext";
function App() {
  const [viewSettings, setViewSettings] = useState(false);

  return (
    <LinksProvider>
      <div className="mocha bg-base text-text flex justify-center items-center h-screen px-8 md:px-16 2xl:px-32 py-4 md:py-8 2xl:py-16">
        <div className="flex justify-center items-center h-full w-full bg-crust rounded-2xl px-8 md:px-16 2xl:px-32 py-4 md:py-8 2xl:py-16">
          <div className="grid lg:grid-cols-2 lg:grid-rows-4 gap-8 2xl:gap-16 h-full w-full">
            <TimeAndWeather viewSettings={viewSettings} onClick={() => setViewSettings(!viewSettings)}/>
            {viewSettings ? <LinkSettings /> : <ToDo />}
            {viewSettings ? <GeneralSettings/> : <Links />}
          </div>
        </div>
      </div>
    </LinksProvider>
  )
}

export default App
