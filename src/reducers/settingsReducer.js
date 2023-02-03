export default function settingsReducer(settings, action) {
  switch (action.type) {
    case "theme": {
      return { ...settings, theme: action.theme };
    }
    case "unit": {
      return { ...settings, unit: action.unit };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
