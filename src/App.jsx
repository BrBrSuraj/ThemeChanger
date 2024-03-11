import { useEffect, useState } from "react";
import Card from "./components/Card";
import Switcher from "./components/Switcher";
import ThemeContext from "./context/ThemeContext";


function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light"? "dark" : "light");
  };
 useEffect(()=>{
  document.querySelector('html').classList.remove('dark','light')
  document.querySelector('html').classList.add(theme)
 },[theme])
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-full h-screen">
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <Switcher />
      <Card />
    </ThemeContext.Provider>
   
      </div>
  )
}

export default App
