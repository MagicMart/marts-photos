import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Nav from './nav'

const StyledHeader = styled.header`
  display: flexbox;
  background: var(--red);
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <h1>
      <span>Martin</span>
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
