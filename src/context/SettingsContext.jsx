import { createContext, useEffect, useContext, useReducer } from "react";
import settingsReducer from "../reducers/settingsReducer";
import { getStorage, setStorage } from "../helpers/localStorage";

const SettingsContext = createContext(null);
const SettingsDispatchContext = createContext(null);

const initSettings = { theme: "mocha", units: "fahrenheit", hours: "twelve" };

export function SettingsProvider({children}) {
  const [settings, dispatch] = useReducer(settingsReducer, getStorage("settings", initSettings));
  
  useEffect(() => {
    setStorage("settings", settings);
  }, [settings]);

  return (
    <SettingsContext.Provider value={settings}>
      <SettingsDispatchContext.Provider value={dispatch}>
        {children}
      </SettingsDispatchContext.Provider>
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  return useContext(SettingsContext);
}

export function useSettingsDispatch() {
  return useContext(SettingsDispatchContext);
}
