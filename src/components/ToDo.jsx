import Widget from "./Widget";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import {ToDoProvider} from "../context/ToDoContext";

function ToDo() {
  
  return (
    <ToDoProvider>
      <Widget>
        <div className="flex flex-col items-stretch gap-4 h-full w-5/6 items-center py-4">
          <ToDoList/>
          <ToDoInput/>
        </div>
      </Widget>
    </ToDoProvider>
  )
}

export default ToDo;

