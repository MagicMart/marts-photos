import PropTypes from 'prop-types'
import React from 'react'
import Nav from './nav'

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <span>Martin</span>
      <span>Tudor</span>
    </h1>
    <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Martin Tudor`,
}

export default Header
