import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavStyles = styled.nav`
  margin: 3rem auto 3rem;
  /* text-align: center; */
  font-size: 1.75rem;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-rows: repeat(4, auto);
    gap: 1rem;
  }
  @media (min-width: 600px) {
    & {
      font-size: 1.8rem;
    }
    ul {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(3, auto);
    }
    button {
      display: none;
    }
  }
`

export default function Nav() {
  const [menuIsOpen, setMenuOpen] = React.useState(true)
  const toggleMenu = () => setMenuOpen((c) => !c)
  return (
    <NavStyles>
      {menuIsOpen && (
        <ul>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
      <button onClick={toggleMenu} style={{ color: 'black' }}>
        Menu
      </button>
    </NavStyles>
  )
}
