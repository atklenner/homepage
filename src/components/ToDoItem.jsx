import Block from "./Block";

function ToDoItem({id, description, completed}) {
  let strikethrough = completed ? "text-gray-400 line-through" : "";
  return (
    <Block>
      <input type="checkbox" checked={completed}/>
      <p className={strikethrough}>{description}</p>
      <input type="button" value="edit"/>
    </Block>
  )
}

export default ToDoItem;
