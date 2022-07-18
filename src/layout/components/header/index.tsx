import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import { useSelector, useDispatch } from 'react-redux'
import { toggleCollapsed } from '@/store/features/menuSlice'

export default function index() {
  const { isCollapsed } = useSelector((state: any) => state.menu)
  const dispatch = useDispatch()

  return (
    <div className="layout-header">
      <span className="icon-collapsed" onClick={() => dispatch(toggleCollapsed())}>
        {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </span>
    </div>
  )
}
