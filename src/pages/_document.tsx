import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

// components JSX
import App from './_app'

// styles
import theme from 'styles/theme'
import GlobalStyles from 'styles/global'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </BrowserRouter>
) // createRoot(container!) if you use TypeScript
