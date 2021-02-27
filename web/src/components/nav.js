import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  text-align: center;
  font-size: 1.5rem;
  ul {
    text-decoration: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-rows: repeat(6, auto);
  }
`

export default function Nav() {
  const [menuIsOpen, setMenuOpen] = React.useState(false)
  const toggleMenu = () => setMenuOpen((c) => !c)
  return (
    <NavStyles>
      {menuIsOpen && (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
      <button onClick={toggleMenu}>Menu</button>
    </NavStyles>
  )
}
