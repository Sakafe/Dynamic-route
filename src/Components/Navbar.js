import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className='nav'>
        <ul>
            <li>
                <NavLink to={'/'} className='nav-link'>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/contact'} className='nav-link'>Contact</NavLink>
            </li>
            <li>
                <NavLink to={'/blog'} className='nav-link'>Blog</NavLink>
            </li>
            <li>
                <NavLink to={'/addblog'} className='nav-link'>AddBlog</NavLink>
            </li>
        </ul>
    </nav>
  )
}
