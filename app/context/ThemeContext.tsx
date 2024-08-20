import React, {createContext, useState, useContext, ReactNode} from 'react'
import {useColorScheme} from 'react-native'

interface ThemeContextType {
    theme: 'light' | 'dark'
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const colorScheme = useColorScheme() // Automatically detect system theme
    const [theme, setTheme] = useState<'light' | 'dark'>(colorScheme || 'light')

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
