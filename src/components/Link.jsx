import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import Block from "./Block";

function Link() {
  return (
    <Block>
      <div className="flex justify-between w-full">
        <a href="https://www.twitter.com" className="grow mr-4" target="_blank">
          link
        </a>
        <button className="px-1">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
      </div>
    </Block>
  )
}

export default Link;
