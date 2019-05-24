import { lazy } from 'react'

export const ROUTES = [
  {
    name: 'Optimized',
    path: '/optimized',
    component: lazy(() => import(/* webpackChunkName: "optimized" */ './optimized/OptimizedMachine')),
  },
  {
    name: 'Original',
    path: '/original',
    component: lazy(() => import(/* webpackChunkName: "original" */ './original/OriginalMachine')),
  },
  {
    name: 'GPU Accelerated',
    path: '/gpu',
    component: lazy(() => import(/* webpackChunkName: "gpu" */ './gpu/GpuMachine')),
  },
  {
    name: 'Web Workers',
    path: '/workers',
    component: lazy(() => import(/* webpackChunkName: "web-worker" */ './webWorker/WebWorkerMachine')),
  },
]
