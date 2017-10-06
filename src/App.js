// @flow

import React from 'react'
import Loadable from 'react-loadable'

import logo from './logo.svg'
import './App.css'

const Loading = () => <div>Loading...</div>

const Layout = Loadable({
  loader: () => import('./containers/Layout'),
  loading: Loading,
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Layout />
    </div>
  )
}

export default App
