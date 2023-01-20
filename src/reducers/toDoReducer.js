export default function toDoReducer(tasks, action) {
  switch (action.type) {
    case "add": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text.slice(0, 50),
          done: false,
        }
      ];
    }
    case "toggle": {
      return tasks.map((task) => {
        if (task.id === action.id) {
          return {...task, done: !task.done};
        } else {
          return task;
        }
      })
    }
    case "delete": {
      return tasks.filter((task) => task.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
