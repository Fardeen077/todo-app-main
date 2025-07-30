import { useTheme } from '../context/ThemeContext'
import Moon from "../images/icon-moon.svg"
import Sun from "../images/icon-sun.svg";

function ThemeToggle() {
  const { theme, handleToggle, bgImage } = useTheme();

  return (
    <>
      {/* Background container */}
      <div
        className="h-72 bg-no-repeat bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Content inside image - centered row with spacing */}
        <div className="flex justify-center px-6 pt-8 md:px-16 md:pt-12">
          <div className="flex justify-between items-center w-full max-w-xl">
            {/* Left - TODO text */}
            <span className="text-4xl font-bold text-white tracking-[0.5em]">
              TODO
            </span>

            {/* Right - Toggle button */}
            <button onClick={handleToggle} className="p-2">
              <img
                src={theme === "light" ? Moon : Sun}
                alt="theme Icon"
                className="w-10 h-10"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThemeToggle;
