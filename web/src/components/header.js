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
    display: grid;
    grid-template-areas:
      'firstname'
      'surname';
    font-size: 2.5rem;
    width: fit-content;
    margin: 0 auto;
  }
  .firstname {
    grid-area: firstname;
  }
  .surname {
    grid-area: surname;
    letter-spacing: 0.09em;
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
      <span className="firstname">Martin</span>
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
