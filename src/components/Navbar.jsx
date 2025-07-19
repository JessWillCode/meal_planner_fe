import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/meals">Meals</Link>
        </li>
        <li>
          <Link to="/meals/new">Add Meal</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/users/new">Add User</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar 