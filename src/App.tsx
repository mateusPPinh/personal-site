import { ThemeProvider } from "styled-components";
import { HeaderComponent } from "./components/Header";
import Home from "./pages/Home";
import {defaultTheme} from './theme/theme'

const App = () => {
  return(
    <ThemeProvider theme={defaultTheme}>
      <HeaderComponent />
      <Home />
    </ThemeProvider>
  )
}

export default App;