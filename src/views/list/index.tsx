import React from 'react'
import { Link, useParams, Outlet } from 'react-router-dom'
export default function List() {
  const params = useParams()
  return (
    <>
      list
      {/* <main>
        <h2>Who are we?{params.id}</h2>
        <p>That feels like an existential question, don't you think?</p>
        <Outlet></Outlet>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav> */}
    </>
  )
}
