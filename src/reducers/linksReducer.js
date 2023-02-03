import { getStorage } from "../helpers/localStorage";

export default function linksReducer(tasks, action) {
  switch (action.type) {
    case "change": {
      return tasks.map((task) => {
        if (task.id !== action.id) return task;
        return {
          id: action.id,
          text: action.text,
          url: action.url,
        }
      })
    }
    case "delete": {
      return tasks.map((task) => {
        if (task.id !== action.id) return task;
        return {id: action.id, text: "", url: ""}
      });
    }
    case "refresh": {
      return getStorage("links");
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
