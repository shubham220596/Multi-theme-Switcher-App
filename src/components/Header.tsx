import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function HeaderOrSidebar() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (e: any) => {
    setTheme(e.target.value);
  };

  const themeBackground =
    theme === "theme2"
      ? "bg-gray-900"
      : theme === "theme3"
      ? "bg-pink-200"
      : "bg-white";

  const themeTextColor =
    theme === "theme2"
      ? "text-white"
      : theme === "theme3"
      ? "text-purple-900"
      : "text-gray-900";

  const navLinkClasses = (isActive: boolean) => {
    if (!isActive) return themeTextColor;
    if (theme === "theme2") return "text-yellow-300 font-semibold underline";
    if (theme === "theme3") return "text-purple-600 font-semibold underline";
    return "text-blue-600 font-semibold underline";
  };

  if (theme === "theme2") {
    return (
      <aside className={`fixed top-0 left-0 h-full w-56 px-4 py-6 shadow-lg z-40 ${themeBackground} ${themeTextColor}`}>
        <div className="font-bold text-2xl mb-6">ThemeApp</div>
        <nav className="flex flex-col gap-4">
          {["/", "/about", "/contact"].map((path) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) => `px-2 py-1 rounded-md hover:bg-gray-800 ${navLinkClasses(isActive)}`}
            >
              {path === "/" ? "Home" : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}
          <select
            value={theme}
            onChange={handleThemeChange}
            className="mt-4 px-2 py-1 rounded bg-gray-700 text-white border border-gray-600"
          >
            <option value="theme1">Theme 1</option>
            <option value="theme2">Theme 2</option>
            <option value="theme3">Theme 3</option>
          </select>
        </nav>
      </aside>
    );
  }

  return (
    <header className={`fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-3 shadow-md z-50 ${themeBackground} ${themeTextColor}`}>
      <div className="font-bold text-4xl">ThemeApp</div>
      <nav className="space-x-4">
        {["/", "/about", "/contact"].map((path) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            className={({ isActive }) => `px-2 py-1 ${navLinkClasses(isActive)}`}
          >
            {path === "/" ? "Home" : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
          </NavLink>
        ))}
        <select
          value={theme}
          onChange={handleThemeChange}
          className={`ml-4 px-2 py-1 rounded border focus:outline-none transition-colors duration-200 ${
            theme === "theme3"
              ? "bg-pink-100 text-purple-900 border-purple-400"
              : "bg-white text-gray-900 border-gray-300"
          }`}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </nav>
    </header>
  );
}