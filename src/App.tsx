import { useEffect, useState } from 'react'
// import logo from './logo.svg'
import { Route, Routes, useRoutes } from 'react-router-dom'
import Home from '@/views/home'
import List from '@/views/list'
import Child from '@/views/child'
import routes from '@/router'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const object = {
    a: 1,
    b: 1
  }

  const element = useRoutes(routes)
  useEffect(() => {
    console.log('useEffect start!!!')
  }, [])
  const test = () => {
    return <>888s8</>
  }
  const _404 = () => {
    return <>404</>
  }
  return (
    <div className="App">
      {element}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="list" element={<List />}>
          <Route path=":id" element={<Child />} />
          <Route index element={test()} />
        </Route>
        <Route path="*" element={_404()} />
      </Routes> */}
    </div>
  )
}

export default App
