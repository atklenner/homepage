import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import Block from "./Block";

function ToDoItem({id, text, done, dispatch}) {
  let strikethrough = done ? "text-gray-400 line-through" : "";

  return (
    <Block>
      <label className="sr-only" for={`complete-${id}`}>{`${done ? "Uncheck" : "Check off"} task ${text}`}</label>
      <input title={`${done ? "Uncheck" : "Check off"} task ${text}`} id={`complete-${id}`} type="checkbox" checked={done} onChange={() => dispatch({type:"toggle", id})}/>
      <p className={strikethrough}><span className="sr-only">{done ? "Completed" : ""}</span>{text}</p>
      <button onClick={() => dispatch({type:"delete", id})}>
        <FontAwesomeIcon icon={faTrash} title={`Delete task ${text}`}/>
        <span className="sr-only">{`Delete task ${text}`}</span>
      </button>
    </Block>
  )
}

export default ToDoItem;
