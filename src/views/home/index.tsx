import React from 'react'
import { Outlet } from 'react-router-dom'
export default function Home() {
  return (
    <>
      home
      <Outlet></Outlet>
      {/* <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/list">About</Link>
      </nav> */}
    </>
  )
}
