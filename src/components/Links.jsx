import Widget from "./Widget";
import LinkList from "./LinkList";

function Links() {
  return (
    <Widget type="short">
      <div className="grid grid-cols-2 grid-rows-4 gap-4 items-stretch w-5/6 h-full py-4">
        <LinkList />
      </div>
    </Widget>
  )
}

export default Links;
