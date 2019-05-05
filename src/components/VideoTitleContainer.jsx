import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import VideoTitle from './VideoTitle'

class VideoTitleContainer extends Component {
  render () {
    const movies = this.props.movies
    return (
      <div>
        <Grid>
          <Row>
            {movies.map((movie, i) =>
              <VideoTitle key={i} poster_image_url={movie.poster_image_url} title={movie.title} trailer_youtube_url={movie.trailer_youtube_url} />
            )}
          </Row>
        </Grid>
      </div>
    )
  }
}

VideoTitleContainer.propTypes = {
  movies: PropTypes.array.isRequired,
  children: PropTypes.object
}

function mapStateToProps (state, ownProps) {
  return {
    movies: state
  }
}

export default connect(mapStateToProps)(VideoTitleContainer)
