import React, { Suspense } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Wrapper.css'

const Wrapper = ({ Children, routes }) => () => (
  <Suspense fallback={<div>Loading...</div>}>
    <div className="app">
      <ul className={style.routes}>
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink to={route.path} activeClassName="active">{route.name}</NavLink>
          </li>
        ))}
      </ul>
      <Children />
    </div>
  </Suspense>
)

export default Wrapper
