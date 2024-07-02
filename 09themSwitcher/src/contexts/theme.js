import { createContext, useContext } from "react";

export const themeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export default function useTheme() {
    return useContext(themeContext)
}

export const ThemeProvider = themeContext.Provider