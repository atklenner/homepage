export default function linksReducer(tasks, action) {
  switch (action.type) {
    case "change": {
      return tasks.map((task) => {
        if (task.id !== action.id) return task;
        return {
          id: action.id,
          text: action.text,
          link: action.link,
        }
      })
    }
    case "delete": {
      return tasks.map((task) => {
        if (task.id !== action.id) return task;
        return {id: action.id, text: "", link: ""}
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
