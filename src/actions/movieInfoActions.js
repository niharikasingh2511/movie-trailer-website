import * as types from './actionTypes'
import movieApi from '../api/SimpleMovieApi'

export function loadMoviesSuccess (movies) {
  return {type: types.LOAD_MOVIES_SUCCESS, movies}
}

export function loadMovies () {
  return function (dispatch) {
    return movieApi.getMovies().then(movies => {
      dispatch(loadMoviesSuccess(movies))
    }).catch(error => {
      throw (error)
    })
  }
}
