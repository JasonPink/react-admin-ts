import { FC } from 'react'
import { HashRouter, Routes, Route, useRoutes } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import Router from '@/routers'

const App: FC = () => {
  return (
    <HashRouter>
      <ConfigProvider>
        <Router />
      </ConfigProvider>
    </HashRouter>
  )
}

export default App
