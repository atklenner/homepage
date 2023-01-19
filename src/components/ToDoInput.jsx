import Block from "./Block";
import {useState} from "react";

function ToDoInput({dispatch}) {
  const [text, setText] = useState("");

  function onClick() {
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
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <input type="button" value="add" onClick={onClick} />
    </Block>
  )
}

export default ToDoInput;
