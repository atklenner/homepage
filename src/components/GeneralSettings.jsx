import Block from "./Block";
import Widget from "./Widget";

function GeneralSettings() {
  return (
    <Widget type="short">
      <div className="flex flex-col gap-4">
        <Block>
          <fieldset>
          <legend>Theme</legend>
          <div> 
            <input id="latte" value="latte" name="theme" type="radio"/>
            <label className="mr-2" htmlFor="latte">Latte</label>
            <input id="frappe" value="frappe" name="theme" type="radio"/>
            <label className="mr-2" htmlFor="frappe">Frappe</label>
            <input id="macchiato" value="macchiato" name="theme" type="radio"/>
            <label className="mr-2" htmlFor="macchiato">Macchiato</label>
            <input id="mocha" value="mocha" name="theme" type="radio" />
            <label htmlFor="mocha">Mocha</label>
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
