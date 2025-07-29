import { useTheme } from '../context/ThemeContext'
import Moon from "../images/icon-moon.svg"
import Sun from "../images/icon-sun.svg";

function ThemeToggle() {
  const { theme, handleToggle, bgImage } = useTheme();

  return (
    <div className="h-72 bg-no-repeat w-full bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}>
      <button onClick={handleToggle} className={`p-2 ${theme === 'light'}`}>
        <img src={theme === "light" ? Moon : Sun} alt='theme Icon' className='p-2 flex justify-center' />
      </button>
    </div>
  )
}
export default ThemeToggle;