import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <ul className='nav-links'>
                
              <Link to={'/'}><li>Home</li></Link>
              <Link to={'/about'}><li>About</li></Link>
              <Link to={'/blogpost'}><li>Blog Post</li></Link>


            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
