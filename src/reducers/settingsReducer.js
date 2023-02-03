export default function settingsReducer(settings, action) {
  switch (action.type) {
    case "theme": {
      return { ...settings, theme: action.theme };
    }
    case "units": {
      return { ...settings, units: action.units };
    }
    case "hours": {
      return { ...settings, hours: action.hours };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
