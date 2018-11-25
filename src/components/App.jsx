import React from 'react'
import ErrorBoundary from './common/ErrorBoundary'
import Routing from './common/Routing'
import { ROUTES } from './routes'

const App = () => <ErrorBoundary><Routing routes={ROUTES} /></ErrorBoundary>

export default App
