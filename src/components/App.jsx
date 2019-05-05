import React, { Component } from 'react'
import Navigation from './Navigation'
import VideoTitleContainer from './VideoTitleContainer'

export default class App extends Component {
  render () {
    return (
      <div>
        <Navigation />
        <VideoTitleContainer />
      </div>
    )
  }
}
