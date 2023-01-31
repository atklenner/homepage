import Widget from "./Widget";
import LinkFields from "./LinkFields";
import { useLinks } from "../context/LinksContext";

function LinkSettings() {
  const links = useLinks();
  return (
    <Widget>
      <div className="flex flex-col gap-4">
      {links.map((link) => {
        return <LinkFields key={link.id} id={link.id} url={link.url} text={link.text} />
      })}
      </div>
    </Widget>
  )
}

export default LinkSettings;
