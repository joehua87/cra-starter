// @flow

import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Loadable from 'react-loadable'
import configureStore from './store/configureStore'

const Loading = () => <div>Loading...</div>

const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: Loading,
})

const About = Loadable({
  loader: () => import('./pages/About'),
  loading: Loading,
})

const store = configureStore()

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Provider>
    </Router>
  )
}

export default App
