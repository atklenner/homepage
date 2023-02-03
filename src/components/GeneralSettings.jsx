import Block from "./Block";
import Widget from "./Widget";

function GeneralSettings() {
  return (
    <Widget type="short">
      <Block>
        <fieldset>
        <legend>Theme</legend>
        <div>
          <input id="latte" value="latte" name="theme" type="radio"/>
          <label htmlFor="latte">Latte</label>
        </div>
        <div>
          <input id="frappe" value="frappe" name="theme" type="radio"/>
          <label htmlFor="frappe">Frappe</label>
        </div>
        <div>
          <input id="macchiato" value="macchiato" name="theme" type="radio"/>
          <label htmlFor="macchiato">Macchiato</label>
        </div>
          <input id="mocha" value="mocha" name="theme" type="radio" />
          <label htmlFor="mocha">Mocha</label>
        </fieldset>
      </Block>
      <Block>
        <fieldset>
          <legend>Temperature Units</legend>
          <div>
            <input id="celsius" value="celsius" name="units" type="radio"/>
            <label htmlFor="celsius">Celsius</label>
          </div>
          <div>
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
            <label htmlFor="twelve">Twelve Hour Clock</label>
          </div>
          <div>
            <input id="twentyFour" value="twentyFour" name="hours" type="radio"/>
            <label htmlFor="twentyFour">Twenty Four Hour Clock</label>
          </div>
        </fieldset>
      </Block>
    </Widget>
  )
}

export default GeneralSettings;
