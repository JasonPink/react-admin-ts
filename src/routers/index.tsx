import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import { RouteObject } from './type'

import lazyLoad from '@/utils/index'

import Login from '@/views/login'
import Table from '@/views/table'
import Home from '@/views/home'
import Layout from '@/layout/index'

export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: '登录页',
      key: 'login'
    }
  },
  {
    path: '/table',
    element: <Table />
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/home/index',
        // element: lazyLoad(React.lazy(() => import("@/views/home/index"))),
        element: <Home />,
        meta: {
          requiresAuth: true,
          title: '首页',
          key: 'home'
        }
      }
    ]
  },
  {
    path: '/permission',
    element: <Layout />,
    children: [
      {
        path: '/permission/admin',
        element: lazyLoad(React.lazy(() => import('@/views/permission/adminPage'))),
        meta: {
          requiresAuth: true,
          title: '首页',
          key: 'home'
        }
      },
      {
        path: '/permission/editor',
        element: lazyLoad(React.lazy(() => import('@/views/permission/editorPage'))),
        meta: {
          requiresAuth: true,
          title: '首页',
          key: 'home'
        }
      },
      {
        path: '/permission/explanation',
        element: lazyLoad(React.lazy(() => import('@/views/permission/explanation'))),
        meta: {
          requiresAuth: true,
          title: '首页',
          key: 'home'
        }
      }
    ]
  }
]

const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router
