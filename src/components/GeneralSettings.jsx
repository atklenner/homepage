import { Fragment } from "react";
import Block from "./Block";
import Widget from "./Widget";
import { useSettings, useSettingsDispatch } from "../context/SettingsContext";

function GeneralSettings() {
  const settings = useSettings();
  const dispatch = useSettingsDispatch();
  const themes = ["latte", "frappe", "macchiato", "mocha"];
  const units = ["fahrenheit", "celsius", "kelvin"];

  function handleThemeChange(e) {
    dispatch({ type: "theme", theme: e.target.value });
  }

  function handleUnitChange(e) {
    dispatch({ type: "unit", unit: e.target.value });
  }

  return (
    <Widget type="short">
      <div className="flex flex-col gap-4">
        <Block>
          <fieldset>
            <legend className="md:text-lg font-medium">Theme</legend>
            <div>
              {themes.map((theme) => {
                return (
                  <Fragment key={theme}>
                    <input
                      id={theme}
                      value={theme}
                      type="radio"
                      name="theme"
                      onChange={handleThemeChange}
                      checked={settings.theme === theme ? "checked" : ""}
                    />
                    <label htmlFor={theme} className="capitalize ml-1 mr-4">
                      {theme}
                    </label>
                  </Fragment>
                );
              })}
            </div>
          </fieldset>
        </Block>
        <Block>
          <fieldset>
            <legend className="md:text-lg font-medium">
              Temperature Units
            </legend>
            <div>
              {units.map((unit) => {
                return (
                  <Fragment key={unit}>
                    <input
                      id={unit}
                      value={unit}
                      type="radio"
                      name="unit"
                      onChange={handleUnitChange}
                      checked={settings.unit === unit ? "checked" : ""}
                    />
                    <label htmlFor={unit} className="capitalize ml-1 mr-4">
                      {unit}
                    </label>
                  </Fragment>
                );
              })}
            </div>
          </fieldset>
        </Block>
      </div>
    </Widget>
  );
}

export default GeneralSettings;
