import React from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'antd'
import { toggleCollapsed } from '@/store/features/menuSlice'

export default function index() {
  const { isCollapsed } = useSelector((state) => state.menu)
  const dispatch = useDispatch()

  return (
    <div>
      <Button onClick={() => dispatch(toggleCollapsed())} style={{ marginBottom: 16 }}>
        {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </div>
  )
}
