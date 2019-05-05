import React, { Component } from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'

export default class Navigation extends Component {
  // state = {}
  render () {
    return (
      <Navbar inverse staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>Fresh Tomatoes Movie Trailers</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  }
}
