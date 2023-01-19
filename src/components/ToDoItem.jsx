import Block from "./Block";

function ToDoItem({id, text, done, dispatch}) {
  let strikethrough = done ? "text-gray-400 line-through" : "";

  return (
    <Block>
      <input type="checkbox" checked={done} onChange={() => dispatch({type:"toggle", id})}/>
      <p className={strikethrough}>{text}</p>
      <input type="button" value="del" onClick={() => dispatch({type:"delete", id})}/>
    </Block>
  )
}

export default ToDoItem;
