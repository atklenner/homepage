import ToDoItem from "./ToDoItem";

function ToDoList({tasks, dispatch}) {
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
