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
        <label className="sr-only" htmlFor="add-task">Enter a new task</label>
        <input type="text" id="add-task" className="placeholder:text-text rounded-sm grow mr-4 px-1 bg-surface0" placeholder="Enter a new task" value={text} onChange={(e) => setText(e.target.value)}/>
        <button>
          <FontAwesomeIcon title="Add task to task list" icon={faPlus}/>
          <span className="sr-only">Add task to task list</span>
        </button>
      </form>
    </Block>
  )
}

export default ToDoInput;
