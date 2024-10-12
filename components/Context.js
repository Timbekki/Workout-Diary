import { createContext } from "react";

const Context = createContext({
  news: [],
  setNews: () => {},
  isMiles: false, 
  setIsMiles: () => {},
});

export default Context;
