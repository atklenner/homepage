import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import Block from "./Block";
import {useState} from "react";
import {useTasksDispatch} from "../context/ToDoContext";
import {nanoid} from "nanoid";

function ToDoInput() {
  const dispatch = useTasksDispatch();
  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (text !== "") {
      dispatch({
        type: "add",
        id: nanoid(),
        text
      });
      setText("");
    }
  }
  return (
    <Block>
      <form className="flex w-full justify-between" onSubmit={onSubmit}>
        <input type="text" className="grow mr-4" value={text} onChange={(e) => setText(e.target.value)}/>
        <button>
          <FontAwesomeIcon icon={faPlus}/>
        </button>
      </form>
    </Block>
  )
}

export default ToDoInput;
