import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisVertical} from "@fortawesome/free-solid-svg-icons";
import Block from "./Block";

function Link() {
  return (
    <Block>
      <a href="https://www.twitter.com" className="h-full w-full flex justify-center items-center text-lg font-medium" target="_blank">
        Twitter
      </a>
    </Block>
  )
}

export default Link;
