import React from 'react'

const themes = {
  dark: {
    backgroundColor: '#2a2135',
    color: '#FBF4FF'
  },
  light: {
    backgroundColor: '#FBF4FF',
    color: '#2a2135'
  }
}

const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {}
}
const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const [dark, setDark] = React.useState(false) // Default theme is light

  // On mount, read the preferred theme from the persistence
  React.useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true'
    setDark(isDark)
  }, [dark])

  // To toggle between dark and light modes
  const toggle = () => {
    const isDark = !dark
    localStorage.setItem('dark', JSON.stringify(isDark))
    setDark(isDark)
  }

  const theme = dark ? themes.dark : themes.light

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }