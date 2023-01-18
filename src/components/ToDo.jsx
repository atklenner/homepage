import Widget from "./Widget";
import ToDoItem from "./ToDoItem";

function ToDo() {
  let tasks = [
    {id: 1, description: "a task", completed: false},
    {id: 2, description: "another task", completed: true},
  ]
  const toDoItems = tasks.map(task => <ToDoItem key={task.id} {...task}/>);
  return (
    <Widget>
    <div className="flex flex-col items-center p-2">
      {toDoItems}
    </div>
    </Widget>
  )
}

export default ToDo;
