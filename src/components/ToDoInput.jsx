import Block from "./Block";
import {useState} from "react";
import {useTasksDispatch} from "../context/ToDoContext";

function ToDoInput() {
  const dispatch = useTasksDispatch();
  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (text !== "") {
      dispatch({
        type: "add",
        id: Math.random() * 10000,
        text
      });
      setText("");
    }
  }
  return (
    <Block>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <input type="submit" value="add" />
      </form>
    </Block>
  )
}

export default ToDoInput;
