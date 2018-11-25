import React from 'react'
import ErrorBoundary from './common/ErrorBoundary'
import Routing from './common/Routing'
import { ROUTES } from './routes'
import Wrapper from './common/Wrapper'

export default () => (
  <ErrorBoundary><Routing routes={ROUTES} Wrapper={Wrapper} /></ErrorBoundary>
)
