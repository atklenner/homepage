import {createContext, useReducer, useContext, useEffect} from "react";
import linksReducer from "../reducers/linksReducer";
import {getStorage, setStorage} from "../helpers/localStorage";

export const LinksContext = createContext(null);
export const LinksDispatchContext = createContext(null);

const initialLinks = [
  {id: 1, text: "Andrew Klenner's Portfolio", url: "https://andrewklenner.netlify.app/"},
  {id: 2, text: "GitHub Repo", url: "https://github.com/atklenner/homepage"},
  {id: 3, text: "", url: ""},
  {id: 4, text: "", url: ""},
  {id: 5, text: "", url: ""},
  {id: 6, text: "", url: ""},
  {id: 7, text: "", url: ""},
  {id: 8, text: "", url: ""},
  ];

export function LinksProvider({children}) {
  const [links, dispatch] = useReducer(linksReducer, getStorage("links", initialLinks));
  
  useEffect(() => {
    setStorage("links", links);
  }, [links]);

  useEffect(() => {
    window.addEventListener("storage", () => {
      dispatch({ type: "refresh" });
    }) 
  }, []);

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
