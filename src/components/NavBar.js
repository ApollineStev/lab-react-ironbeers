import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar' >
        
        <Link className='text-decoration-none text-light mt-2' style={{color: "rgb(175, 164, 149)"}} to={'/'}>Home</Link>
    </nav>
  )
}

export default NavBar