import React from "react"
// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import {
  Navbar,
} from "react-bootstrap"

const Header = props => (
  <Navbar bg="transparent" expand="lg">
    <div className="container" bg="transparent">
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
    </div>
  </Navbar>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
