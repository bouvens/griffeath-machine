import React, { StrictMode } from 'react'
import ErrorBoundary from './common/ErrorBoundary'
import Routing from './common/Routing'
import { ROUTES } from './routes'

const App = () => (
  <StrictMode>
    <ErrorBoundary>
      <Routing routes={ROUTES} />
    </ErrorBoundary>
  </StrictMode>
)

export default App
