import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <nav className='header'>
    <div className="navbar">
      <div className="logo">
        logo
      </div>
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Location</li>
          <li>About Us</li>
          <li>Contacts</li>
        </ul>
      </div>
    </div>
    </nav>
  )
}
