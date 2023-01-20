import ToDoItem from "./ToDoItem";
import {useTasks, useTasksDispatch} from "../context/ToDoContext";

function ToDoList() {
  const tasks = useTasks();
  const dispatch = useTasksDispatch();
  const toDoItems = tasks.map(task => {
    return <ToDoItem key={task.id} dispatch={dispatch} {...task}/>
  });

  return (
    <>
      {toDoItems}
    </>
  )
}

export default ToDoList;
