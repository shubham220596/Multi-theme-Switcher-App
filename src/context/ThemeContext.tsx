import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type Theme = 'theme1' | 'theme2' | 'theme3';

interface ThemeContextProps {
    theme: Theme,
    setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextProps>({theme: 'theme1', setTheme: () => { }});


export const ThemeProvider: React.FC<{children: React.ReactNode }> = ({children}) => {
    const [theme, setThemeState] = useState<Theme>('theme1');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as Theme;
        if (storedTheme) {
            setThemeState(storedTheme);
        }
    },  []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.className = theme;
    }, [theme]);

    const setTheme = (theme: Theme) => {
        setThemeState(theme);
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);