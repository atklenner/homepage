import Widget from "./Widget";
import ToDoItem from "./ToDoItem";
import ToDoInput from "./ToDoInput";
import toDoReducer from "../reducers/toDoReducer";
import {useReducer} from "react";

function ToDo() {
  const [tasks, dispatch] = useReducer(toDoReducer, initialTasks);
  
  const toDoItems = tasks.map(task => {
    return <ToDoItem key={task.id} dispatch={dispatch} {...task}/>
  });

  return (
    <Widget>
      <div className="flex flex-col items-center p-2">
        {toDoItems}
        <ToDoInput dispatch={dispatch}/>
      </div>
    </Widget>
  )
}

export default ToDo;

const initialTasks = [
    {id: 1, text: "a task", done: false},
    {id: 2, text: "another task", done: true},
  ];
