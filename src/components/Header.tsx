import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
    const {theme, setTheme } = useTheme();

    const handleThemeChange = (e: any) => {
        setTheme(e.target.value)
    }

    return (
       <header className={`fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-3 shadow-md bg-white dark:bg-gray-800 dark:text-white z-50 ${
    theme === 'theme2'
      ? 'bg-gray-800 text-white'
      : theme === 'theme3'
      ? 'bg-pink-200 text-purple-900'
      : 'bg-white text-gray-900'
  }`}>
           <div className="font-bold text-4xl">ThemeApp</div>
           <nav className="space-x-4">
             <NavLink to="" className={({ isActive }) =>
                    `px-2 py-1 ${
                    isActive
                        ? theme === 'theme2'
                        ? 'text-yellow-300'
                        : theme === 'theme3'
                        ? 'text-purple-600 font-semibold underline'
                        : 'text-blue-600 font-semibold underline'
                        : 'text-inherit'
                    }`
                }>Home
             </NavLink>
             <NavLink to="/about" className={({ isActive }) =>
                    `px-2 py-1 ${
                    isActive
                        ? theme === 'theme2'
                        ? 'text-yellow-300'
                        : theme === 'theme3'
                        ? 'text-purple-600 font-semibold underline'
                        : 'text-blue-600 font-semibold underline'
                        : 'text-inherit'
                    }`
                }>
               About
             </NavLink>
             <NavLink to="/contact" className={({ isActive }) =>
                    `px-2 py-1 ${
                    isActive
                        ? theme === 'theme2'
                        ? 'text-yellow-300'
                        : theme === 'theme3'
                        ? 'text-purple-600 font-semibold underline'
                        : 'text-blue-600 font-semibold underline'
                        : 'text-inherit'
                    }`
                }>
                Contact
             </NavLink>
             <select value={theme} onChange={handleThemeChange} className={`ml-4 px-2 py-1 rounded border ${
    theme === 'theme2'
      ? 'bg-gray-700 text-white border-gray-600'
      : theme === 'theme3'
      ? 'bg-pink-100 text-purple-900 border-purple-400'
      : 'bg-white text-gray-900 border-gray-300'
  }`}>
                <option value="theme1">
                    Theme 1
                </option>
                <option value="theme2">
                    Theme 2
                </option>
                <option value="theme3">
                    Theme 3
                </option>
             </select>
           </nav>
       </header>
    )
}