import TimeAndWeather from "./components/TimeAndWeather";
import ToDo from "./components/ToDo";
import Links from "./components/Links";
import { useState } from "react";
import LinkSettings from "./components/LinkSettings";
import GeneralSettings from "./components/GeneralSettings";
import { LinksProvider } from "./context/LinksContext";
import { useSettings } from "./context/SettingsContext";
function App() {
  const settings = useSettings();
  const [viewSettings, setViewSettings] = useState(false);

  return (
    <LinksProvider>
      <main
        className={`${settings.theme} bg-base text-text flex justify-center min-h-screen md:h-screen px-4 md:px-8 2xl:px-24 py-4 md:py-8 2xl:py-12`}
      >
        {" "}
        <div className="flex justify-center items-center w-full bg-crust rounded-2xl px-4 md:px-8 2xl:px-24 py-4 md:py-8 2xl:py-12">
          <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-4 gap-4 md:gap-8 2xl:gap-12 h-full w-full">
            <TimeAndWeather
              viewSettings={viewSettings}
              onClick={() => setViewSettings(!viewSettings)}
            />
            {viewSettings ? <LinkSettings /> : <ToDo />}
            {viewSettings ? <GeneralSettings /> : <Links />}
          </div>
        </div>
      </main>
    </LinksProvider>
  );
}

export default App;
