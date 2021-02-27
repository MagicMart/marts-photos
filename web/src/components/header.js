import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Nav from './nav'

const StyledHeader = styled.header`
  margin-bottom: 3rem;
  display: grid;
  grid-template-rows: auto 1fr;
  background: var(--yellow);
  h1 {
    font-size: 2rem;
    text-align: center;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Nav />
    <h1>
      <span>Martin</span>
      <br />
      <span>Tudor</span>
    </h1>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Martin Tudor`,
}

export default Header
