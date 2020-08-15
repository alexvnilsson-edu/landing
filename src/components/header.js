import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import HeaderLogo from "./core/header/logo"

const Header = ({ siteTitle }) => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent px-0">
      <Link className="d-flex flex-row align-items-center navbar-brand" to="/">
        <HeaderLogo className="d-flex mx-0" />
      </Link>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
