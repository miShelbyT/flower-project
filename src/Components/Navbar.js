import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (

    <div className="nav">
      <NavLink to="/flowers" className="link">
        All Flowers
      </NavLink>
      <NavLink to="/flowers/saved" className="link">
        Saved Flowers
      </NavLink>
      <NavLink to="/flowers/new" className="link">
        New Flower
      </NavLink>
    </div>
  )
}

export default Navbar