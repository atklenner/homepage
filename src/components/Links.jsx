import Widget from "./Widget";
import LinkList from "./LinkList";

function Links() {
  return (
    <Widget type="short">
      <div className="grid grid-cols-2 grid-rows-4 w-5/6 h-5/6">
        <LinkList />
      </div>
    </Widget>
  )
}

export default Links;
