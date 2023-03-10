import Widget from "./Widget";
import LinkList from "./LinkList";

function Links() {
  return (
    <Widget type="short">
      <div className="grid grid-cols-2 grid-rows-4 gap-2 lg:gap-4 items-stretch w-full h-full">
        <LinkList />
      </div>
    </Widget>
  )
}

export default Links;
