import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import Block from "./Block";

function ToDoItem({id, text, done, dispatch}) {
  let strikethrough = done ? "text-gray-400 line-through" : "";

  return (
    <Block>
      <input type="checkbox" checked={done} onChange={() => dispatch({type:"toggle", id})}/>
      <p className={strikethrough}>{text}</p>
      <button onClick={() => dispatch({type:"delete", id})}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </Block>
  )
}

export default ToDoItem;
