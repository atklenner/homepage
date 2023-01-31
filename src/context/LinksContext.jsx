import {createContext, useReducer, useContext, useEffect} from "react";
import linksReducer from "../reducers/linksReducer";
import {getStorage, setStorage} from "../helpers/localStorage";

export const LinksContext = createContext(null);
export const LinksDispatchContext = createContext(null);

const initialLinks = [
    {id: 1, text: "GitHub", link: "http://www.github.com/atklenner"},
    {id: 2, text: "", link: ""},
    {id: 3, text: "", link: ""},
    {id: 4, text: "", link: ""},
    {id: 5, text: "", link: ""},
    {id: 6, text: "", link: ""},
    {id: 7, text: "", link: ""},
    {id: 8, text: "", link: ""},
  ];

export function LinksProvider({children}) {
  const [links, dispatch] = useReducer(linksReducer, getStorage("links", initialLinks));
  
  useEffect(() => {
    setStorage("links", links);
  }, [links]);

  return (
    <LinksContext.Provider value={links}>
      <LinksDispatchContext.Provider value={dispatch}>
        {children}
      </LinksDispatchContext.Provider>
    </LinksContext.Provider>
  )
} 

export function useLinks() {
  return useContext(LinksContext);
}

export function useLinksDispatch() {
  return useContext(LinksDispatchContext);
}
