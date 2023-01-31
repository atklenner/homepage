import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import Block from "./Block";

function Link({ url, text }) {
  return (
    <Block>
      <a href={url} className="h-full w-full flex justify-center items-center text-lg font-medium" target="_blank">
        {text}
      </a>
    </Block>
  )
}

export default Link;
