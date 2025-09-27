import { createContext, useContext, useState } from "react";
import BgDark from "../../images/bg-desktop-dark.jpg"
import BgLight from "../../images/bg-desktop-light.jpg";


const ThemeContext = createContext({
    theme: "light",
    handleToggle: () => { },
    bgImage: BgLight,
});

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const handleToggle = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };
    const bgImage = theme === "light" ? BgDark : BgLight;

    return (
        <ThemeContext.Provider value={{ theme, handleToggle, bgImage }}>
            <div className={`min-h-screen transition-all duration-300 ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
};