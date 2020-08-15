import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent px-0">
      <Link className="navbar-brand" to="/">
        <h1 className="display-4">Edu</h1>
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
