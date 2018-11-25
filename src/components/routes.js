import { lazy } from 'react'

export const ROUTES = [
  {
    name: 'Optimized',
    path: 'optimized',
    component: lazy(() => import('./optimized/GriffeathMachine')),
  },
  {
    name: 'Original',
    path: 'original',
    component: lazy(() => import('./original/GriffeathMachine')),
  },
  {
    name: 'GPU Accelerated',
    path: 'gpu',
    component: lazy(() => import('./gpu/GriffeathMachine')),
  },
]
