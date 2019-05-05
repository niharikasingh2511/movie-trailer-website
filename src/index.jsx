import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { loadMovies } from './actions/movieInfoActions'
import App from './components/App'

const store = configureStore()

// 1. Call dispatch on the store with an argument of this action that makes an API request
// 2. The loadMovies() action is invoked, which makes an API call, and dispatches the loadMoviesSuccess action
// 3. that action: store -> root reducer -> movies reducer
// 4. movies reducer handles that action, recieves movies payload and return new state that has movies: movies payload
// 5. the VideoTitleContainer component is connected to the store, so store's new state triggers the mapStateToProps function, which triggers the render function on that component
store.dispatch(loadMovies())

render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
