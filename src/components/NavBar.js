import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='' >
        <h2>Welcome to Ironbeers!!!</h2>
        <Link to={'/'}>Home</Link>
    </div>
  )
}

export default NavBar