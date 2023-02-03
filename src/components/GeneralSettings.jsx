import { Fragment } from "react";
import Block from "./Block";
import Widget from "./Widget";
import {useSettings, useSettingsDispatch} from "../context/SettingsContext";

function GeneralSettings() {
  const settings = useSettings();
  const dispatch = useSettingsDispatch();
  const themes = ["latte", "frappe", "macchiato", "mocha"];

  function handleThemeChange(e) {
    console.log(e.target.value)
    dispatch({type:"theme", theme: e.target.value});
  }

  return (
    <Widget type="short">
      <div className="flex flex-col gap-4">
        <Block>
          <fieldset>
          <legend>Theme</legend>
          <div> 
            {themes.map(theme => {
              return (
                <Fragment key={theme}>
                  <input id={theme} value={theme} type="radio" name="theme" onChange={handleThemeChange} checked={settings.theme === theme ? "checked" : ""}/>
                  <label htmlFor={theme} className="capitalize mr-2">{theme}</label>
                </Fragment>
              )
            })}
          </div>
          </fieldset>
        </Block>
        <Block>
          <fieldset>
            <legend>Temperature Units</legend>
            <div>
              <input id="celsius" value="celsius" name="units" type="radio"/>
              <label className="mr-2" htmlFor="celsius">Celsius</label>
              <input id="fahrenheit" value="fahrenheit" name="units" type="radio"/>
              <label htmlFor="fahrenheit">Fahrenheit</label>
            </div>
          </fieldset>
        </Block>
        <Block>
          <fieldset>
            <legend>Clock Settings</legend>
            <div>
              <input id="twelve" value="twelve" name="hours" type="radio"/>
              <label className="mr-2" htmlFor="twelve">Twelve Hour Clock</label>
              <input id="twentyFour" value="twentyFour" name="hours" type="radio"/>
              <label htmlFor="twentyFour">Twenty Four Hour Clock</label>
            </div>
          </fieldset>
        </Block>
      </div>
    </Widget>
  )
}

export default GeneralSettings;
