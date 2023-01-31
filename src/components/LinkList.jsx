import { useLinks } from "../context/LinksContext";
import Link from "./Link";

function LinkList() {
  const links = useLinks();

  return (
    <>
      {links.map(link => {
        return <Link key={link.id} url={link.url} text={link.text} />
      })}
    </>
  )
}

export default LinkList;
