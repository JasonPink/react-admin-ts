import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LayoutMenu from './components/menu'
import LayoutHeader from './components/header'
import LayoutLogo from './components/logo'
import LayoutSetting from './components/setting'
import './index.scss'

export default function Laout() {
  const { isCollapsed } = useSelector((state: any) => state.menu)
  const { showlogo } = useSelector((state: any) => state.setting)

  return (
    <div className="layout-container">
      <div className="layout-side" style={{ width: !isCollapsed ? '220px' : '80px' }}>
        {showlogo ? <LayoutLogo /> : null}
        <LayoutMenu />
      </div>
      <div className="layout-main">
        <LayoutHeader />
        <div className="layout-content">
          <Outlet />
        </div>
      </div>
      <LayoutSetting />
    </div>
  )
}
