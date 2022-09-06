import { createContext, useContext, useState, useEffect, useCallback } from "react";

const ThemeContext = createContext();

const useThemeState = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const storeTheme = localStorage.getItem("todo-app-theme");
    if(storeTheme && ["light", "dark"].includes(storeTheme)) setTheme(storeTheme);
  }, []);

  useEffect(() => localStorage.setItem("todo-app-theme", theme), [theme]);

  const toggleTheme = useCallback(() => setTheme(prevTheme => prevTheme === "light" ? "dark" : "light"), []);

  return { theme, toggleTheme };
}

export const AppThemeProvider = ({children}) => {
  return (
    <ThemeContext.Provider value={useThemeState()}>
      {children}
    </ThemeContext.Provider>
  )
}

const useThemeContext = () => useContext(ThemeContext);

export default useThemeContext;