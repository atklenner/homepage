import {createContext, useReducer, useContext, useEffect} from "react";
import toDoReducer from "../reducers/toDoReducer";

export const ToDoContext = createContext(null);
export const ToDoDispatchContext = createContext(null);

const initialTasks = [
    {id: 1, text: "a task", done: false},
    {id: 2, text: "another task", done: true},
  ];

export function ToDoProvider({children}) {
  const [tasks, dispatch] = useReducer(toDoReducer, initialTasks, () => {
    try {
      const tasks = window.localStorage.getItem("tasks");
      return tasks ? JSON.parse(tasks) : initialTasks;
    } catch (error) {
      console.log(error);
      return initialTasks;
    }
  });
  
  useEffect(() => {
    try {
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.log(error);
    }
  }, [tasks]);

  return (
    <ToDoContext.Provider value={tasks}>
      <ToDoDispatchContext.Provider value={dispatch}>
        {children}
      </ToDoDispatchContext.Provider>
    </ToDoContext.Provider>
  )
} 

export function useTasks() {
  return useContext(ToDoContext);
}

export function useTasksDispatch() {
  return useContext(ToDoDispatchContext);
}
