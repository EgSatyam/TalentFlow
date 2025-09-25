// src/contexts/ThemeContext.jsx
import React, { createContext, useEffect, useState } from 'react'

// Create the context object we will use to read/write theme from components
export const ThemeContext = createContext()

// Provider component that wraps the app and provides theme state
export function ThemeProvider({ children }) {
  // initialize from localStorage if present, otherwise default to 'light'
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('tf_theme') || 'light'
    } catch (e) {
      return 'light'
    }
  })

  // whenever theme changes, persist it so it survives refresh
  useEffect(() => {
    try {
      localStorage.setItem('tf_theme', theme)
    } catch (e) {
      // ignore localStorage errors in restricted environments
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
