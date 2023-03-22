import { QueryClientProvider } from 'react-query'
import {ThemeProvider} from 'styled-components'
import { queryClient } from './libs/react-query'
import { Router } from './routes/index.routes'
import { Home } from './screens/Home'
import { AppContainer } from './styles/app'
import { GlobalTheme } from './styles/global'
import { theme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
      <Router/>
      </QueryClientProvider>

      <GlobalTheme/>
    </ThemeProvider>
  )
}

