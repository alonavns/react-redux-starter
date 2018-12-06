import React, { Component } from 'react'

import logo from 'assets/images/Logo.png';
import './Header.scss'

class Header extends Component {
  render() {
    return (
      <div className="HeaderWrapper">
        <img src={logo} alt="Logo" />
      </div>
    )
  }
}

export default Header
