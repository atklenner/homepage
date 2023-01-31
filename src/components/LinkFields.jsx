import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import Block from "./Block";
import { useLinksDispatch } from "../context/LinksContext";
import { useState } from "react";
import { useEffect } from "react";

function LinkFields({ url, text, id }) {
  const dispatch = useLinksDispatch();
  const [inputText, setInputText] = useState(text);
  const [inputUrl, setInputUrl] = useState(url);

  useEffect(() => {
    dispatch({type: "change", url: inputUrl, text: inputText, id})
  }, [inputText, inputUrl])

  function handleClick() {
    dispatch({type: "delete", id});
    setInputText("");
    setInputUrl("");
  }

  return (
    <Block>
      <div className="mr-2">
        <input className="w-full mb-2" type="text" placeholder="Name" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
        <input className="w-full" type="text" placeholder="URL" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)}/>
      </div>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </Block>
  )
}

export default LinkFields;
