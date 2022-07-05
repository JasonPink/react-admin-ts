// import { ReactNode } from 'react'

// export interface NestedRoute {
//   path: string
//   routes?: Array<NestedRoute>
// }

// type MenuType = 'menu' | 'subMenu'

// export interface MenuRoute extends NestedRoute {
//   name?: string
//   routes?: MenuRoute[] | undefined
//   authority?: string[] | string
//   hideChildrenInMenu?: boolean
//   hideInMenu?: boolean
//   icon?: string | ReactNode
//   locale?: string
//   type?: MenuType

//   [key: string]: any
// }

export interface MetaProps {
  keepAlive?: boolean
  requiresAuth?: boolean
  title: string
  key?: string
}

export interface RouteObject {
  caseSensitive?: boolean
  children?: RouteObject[]
  element?: React.ReactNode
  index?: boolean
  path?: string
  meta?: MetaProps
  isLink?: string
}
