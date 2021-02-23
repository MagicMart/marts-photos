import React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  )
}
