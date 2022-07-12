import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LayoutMenu from './components/menu'
import LayoutHeader from './components/header'
import LayoutLogo from './components/logo'
import './index.scss'

export default function Laout() {
  const { isCollapsed } = useSelector((state: any) => state.menu)

  return (
    <div className="layout-container">
      <div className="layout-side" style={{ width: !isCollapsed ? '220px' : '80px' }}>
        <LayoutLogo />
        <LayoutMenu />
      </div>
      <div className="layout-main">
        <LayoutHeader />
        <div className="layout-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
