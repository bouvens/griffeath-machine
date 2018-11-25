import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Wrapper from './Wrapper'

const Routing = ({ routes }) => (
  <BrowserRouter>
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          component={Wrapper({ routes, Children: route.component })}
        />
      ))}
      <Redirect exact from="/" to={`/${routes[0].path}`} />
    </Switch>
  </BrowserRouter>
)

Routing.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  })).isRequired,
}

export default Routing
