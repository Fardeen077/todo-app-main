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
    };
    const bgImage = theme === "light" ? "../images/bg-desktop-dark.jpg " : "../images/bg-desktop-light.jpg";
    return (
        <ThemeContext.Provider value={{ theme, handleToggle, bgImage }}>
            <div className={`min-h-screen transition-all duration-300 ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
};