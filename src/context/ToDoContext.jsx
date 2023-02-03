import {createContext, useReducer, useContext, useEffect} from "react";
import toDoReducer from "../reducers/toDoReducer";
import {getStorage, setStorage} from "../helpers/localStorage";

export const ToDoContext = createContext(null);
export const ToDoDispatchContext = createContext(null);

const initialTasks = [
    {id: 1, text: "This is a task list", done: false},
  ];

export function ToDoProvider({children}) {
  const [tasks, dispatch] = useReducer(toDoReducer, getStorage("tasks", initialTasks));
  
  useEffect(() => {
    setStorage("tasks", tasks);
  }, [tasks]);

  useEffect(() => {
    window.addEventListener("storage", () => {
      dispatch({ type: "refresh" });
    }) 
  }, []);
  
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
