import React, { useState } from 'react'
import { Button, Drawer, Switch } from 'antd'
import { SettingOutlined } from '@ant-design/icons'

import { useSelector, useDispatch } from 'react-redux'
import { toggleShowLogo } from '@/store/features/settingSlice'

export default function index() {
  const [visible, setVisible] = useState(false)
  const { showlogo } = useSelector((state: any) => state.setting)

  const dispatch = useDispatch()

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <>
      <div className="layout-setting">
        <Button type="primary" icon={<SettingOutlined />} onClick={showDrawer} />
      </div>
      <Drawer
        className="setting-drawer"
        width={300}
        title="系统设置"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <div className="setting-row">
          <div className="label">主题:</div>
          <Switch defaultChecked checked={showlogo} onChange={() => dispatch(toggleShowLogo())} />
        </div>
        <div className="setting-row">
          <div className="label">logo:</div>
          <Switch defaultChecked checked={showlogo} onChange={() => dispatch(toggleShowLogo())} />
        </div>
      </Drawer>
    </>
  )
}
