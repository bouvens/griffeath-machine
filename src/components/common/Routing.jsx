import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { HashRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import style from './Routing.css'

const WrapLazy = (Children) => (
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
            <NavLink
              to={route.path}
              className={({ isActive }) => (isActive ? style.active : undefined)}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
        ← these are loaded lazily
      </ul>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={WrapLazy(route.component)}
          />
        ))}
        <Route exact path="/" element={<Navigate to={routes[0].path} />} />
      </Routes>
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
