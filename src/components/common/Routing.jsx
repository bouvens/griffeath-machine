import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { HashRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom'
import style from './Routing.css'

const WrapLazy = (Children) => () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Children />
  </Suspense>
)

const Routing = ({ routes }) => (
  <HashRouter>
    <div className="app">
      <ul className={style.routes}>
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink to={route.path} activeClassName={style.active}>{route.name}</NavLink>
          </li>
        ))}
        ← these loads lazily
      </ul>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={WrapLazy(route.component)}
          />
        ))}
        <Redirect exact from="/" to={routes[0].path} />
      </Switch>
    </div>
  </HashRouter>
)

Routing.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  })).isRequired,
}

export default Routing
