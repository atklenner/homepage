import Widget from "./Widget";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import toDoReducer from "../reducers/toDoReducer";
import {useReducer} from "react";

function ToDo() {
  const [tasks, dispatch] = useReducer(toDoReducer, initialTasks);
  
  return (
    <Widget>
      <div className="flex flex-col h-full w-full items-center p-2">
        <ToDoList tasks={tasks} dispatch={dispatch}/>
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
