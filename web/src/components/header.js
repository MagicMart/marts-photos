import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Nav from './nav'

const StyledHeader = styled.header`
  margin: 3rem auto 0;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  h1 {
    font-size: 2.5rem;
    width: fit-content;
    margin: 0 auto;
  }
  .surname {
    letter-spacing: 0.15em;
  }
  @media (min-width: 600px) {
    & {
      margin: 3rem auto 3rem;
      grid-template-rows: 1fr;
      grid-template-columns: auto 1fr;
    }
    h1 {
      font-size: 4rem;
    }
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <h1 className="tilt mark">
      <span>Martin</span>
      <br />
      <span className="surname">Tudor</span>
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
