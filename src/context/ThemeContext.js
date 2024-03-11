import { createContext } from "react";

let ThemeContext=createContext({
    theme: "light",
    toggleTheme: () => {},
  })
  export default ThemeContext;