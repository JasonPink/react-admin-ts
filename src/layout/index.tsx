import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import LayoutMenu from './components/menu'
import './index.scss'

export default function Laout() {
  return (
    <div className="layout-container">
      <div className="layout-side">
        <LayoutMenu />
      </div>
      <div className="layout-main">
        <Outlet />
      </div>
    </div>
  )
}
