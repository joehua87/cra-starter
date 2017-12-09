// @flow

import React from 'react'
import { Route, Router } from 'react-router-dom'
import Loadable from 'react-loadable'
import history from 'store/history'

const Loading = () => <div>Loading...</div>

const Layout = Loadable({
  loader: () => import('containers/Layout'),
  loading: Loading,
})

const Home = Loadable({
  loader: () => import('pages/Home'),
  loading: Loading,
})

const About = Loadable({
  loader: () => import('pages/About'),
  loading: Loading,
})

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
      </Layout>
    </Router>
  )
}

export default App
