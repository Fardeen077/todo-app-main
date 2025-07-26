import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
    theme: "light",
    handleToggle: () => { }
});

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const handleToggle = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }
    return (
        <ThemeContext.Provider value={{ theme, handleToggle }}>
            <div className={`min-h-screen transition-all duration-300 ${theme === "light" ? "bg-gray-100" : "bg-gray-900"}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
};