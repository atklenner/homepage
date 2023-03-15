import Widget from "./Widget";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import { ToDoProvider } from "../context/ToDoContext";

function ToDo() {
  return (
    <ToDoProvider>
      <Widget>
        <div className="flex flex-col items-stretch gap-4 h-full w-full items-center">
          <ToDoList />
          <ToDoInput />
        </div>
      </Widget>
    </ToDoProvider>
  );
}

export default ToDo;
