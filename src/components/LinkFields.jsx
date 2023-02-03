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
      <div className="mr-4">
        <label htmlFor={`url-name-${id}`} className="sr-only">Name of webpage</label>
        <input id={`url-name-${id}`} className="placeholder:text-text w-full mb-2 px-1 rounded-sm bg-surface0" type="text" placeholder="Name of webpage" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
        <label htmlFor={`url-${id}`} className="sr-only">URL</label>
        <input id={`url-${id}`} className="placeholder:text-text w-full px-1 rounded-sm bg-surface0" type="text" placeholder="URL" value={inputUrl} onChange={(e) => setInputUrl(e.target.value)}/>
      </div>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faTrash} title={`Delete Link to ${text}`}/>
        <span className="sr-only">{`Delete Link to ${text}`}</span>
      </button>
    </Block>
  )
}

export default LinkFields;
