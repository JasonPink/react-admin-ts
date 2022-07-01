import React from 'react'

import Home from '@/views/home'
import List from '@/views/list'
import Child from '@/views/child'

const routes = [
  {
    path: '/',
    element: <Home />,
    // element: React.lazy(() => import('@/views/home')),
    children: [
      {
        index: true,
        element: <List />
        // element: React.lazy(() => import('@/views/list'))
      },
      {
        path: ':id',
        element: <Child />
        // element: React.lazy(() => import('@/views/child'))
      }
    ]
  }
]

export default routes
