import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Nav from './nav'

const StyledHeader = styled.header`
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  background: var(--red);

  nav {
    background: yellow;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <h1>
      <span>Martin</span>
      <br />
      <span>Tudor</span>
    </h1>
    <Nav />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Martin Tudor`,
}

export default Header
