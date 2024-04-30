import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from './routes'
import { GlobalStyle } from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {routes}
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)


