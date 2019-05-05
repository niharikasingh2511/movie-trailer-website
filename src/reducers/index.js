import { combineReducers } from 'redux'
import movies from './moviesReducer'

const rootReducer = combineReducers({
  // short hand property names
  movies
})

export default rootReducer
