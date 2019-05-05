import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/lib/Col'
import Modal from 'react-bootstrap/lib/Modal'
import YouTube from 'react-youtube'
import { Motion, spring } from 'react-motion'
import Timer from '../util/Timer'
import Random from '../util/Random'

import '../assets/stylesheets/base.scss'

export default class VideoTitle extends Component {
  constructor (props) {
    super(props)
    this.state = { showModal: false }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)

    this.timer = Timer.setInterval(() => {
      console.log(`Trigging time out. index=${this.youtubeId}`)
      this.setState(this.state.open ? { open: false } : { open: true })
      Timer.clearTimeout(this.timer)
    }, Random.getRandomInt(50, 400))
  }

  close () {
    this.setState({ showModal: false })
  }

  open () {
    this.setState({ showModal: true })
  }

  render () {
    const opts = {
      height: '400',
      width: '600',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }

    const modalStyle = {
      height: 430
    }
    const posterImageUrl = this.props.poster_image_url
    const title = this.props.title
    this.youtubeId = this.props.trailer_youtube_url.match(/(^|=|\/)([0-9A-Za-z_-]{11})(\/|&|$|\?|#)/)[2]
    return (
      <Col md={6} lg={4} className='movie-tile text-center' onClick={this.open} >
        {/*<img src={posterImageUrl} width={220} height={342} />*/}
        <Motion key={this.props.index} style={{ width: spring(this.state.open ? 220 : 1), height: spring(this.state.open ? 342 : 1) }}>
          {({ width, height }) =>
            <img src={posterImageUrl} width={width} height={height} />
          }
        </Motion>
        <h2>{title}</h2>
        <Modal show={this.state.showModal} onHide={this.close} style={modalStyle}>
          <YouTube videoId={this.youtubeId} opts={opts} />
        </Modal>
      </Col>
    )
  }
}

VideoTitle.propTypes = {
  title: PropTypes.string.isRequired,
  storyline: PropTypes.string,
  poster_image_url: PropTypes.string.isRequired,
  trailer_youtube_url: PropTypes.string.isRequired
}
