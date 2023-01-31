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
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
