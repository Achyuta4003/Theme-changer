import { createContext } from "react";


const ThemeContext = createContext({ currentTheme: {}, changeTheme: () => { } })

export default ThemeContext;