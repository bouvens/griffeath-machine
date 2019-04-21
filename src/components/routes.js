import { lazy } from 'react'

export const ROUTES = [
  {
    name: 'Optimized',
    path: '/optimized',
    component: lazy(() => import('./optimized/OptimizedMachine')),
  },
  {
    name: 'Original',
    path: '/original',
    component: lazy(() => import('./original/OriginalMachine')),
  },
  {
    name: 'GPU Accelerated',
    path: '/gpu',
    component: lazy(() => import('./gpu/GpuMachine')),
  },
  {
    name: 'Web Workers',
    path: '/workers',
    component: lazy(() => import('./webWorker/WebWorkerMachine')),
  },
]
