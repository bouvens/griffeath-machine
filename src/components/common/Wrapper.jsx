import React, { Suspense } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Wrapper.css'

const Wrapper = ({ Children, routes }) => () => (
  <div className="app">
    <ul className={style.routes}>
      {routes.map((route) => (
        <li key={route.path}>
          <NavLink to={route.path} activeClassName={style.active}>{route.name}</NavLink>
        </li>
      ))}
    </ul>
    <Suspense fallback={<div>Loading...</div>}>
      <Children />
    </Suspense>
  </div>
)

export default Wrapper
