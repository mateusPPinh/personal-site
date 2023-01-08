import { ThemeProvider } from "styled-components";
import { HeaderComponent } from "./components/Header";
import Home from "./pages/Home";
import {defaultTheme} from './theme/theme'
import React from 'react';

const App = () => {
  const [darkMode, setDarkMode] = React.useState(true)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return(
    <ThemeProvider theme={defaultTheme}>
      <HeaderComponent isDarkTheme={false} toggleTheme={toggleTheme} />
      <Home />
    </ThemeProvider>
  )
}

export default App;