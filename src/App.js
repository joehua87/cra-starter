// @flow

import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Loadable from 'react-loadable'
import configureStore from './store/configureStore'
import configureApollo from './store/configureApollo'
import createReducer from './reducers'

const Loading = () => <div>Loading...</div>

// Use react-reloadable for code split
const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: Loading,
})

const About = Loadable({
  loader: () => import('./pages/About'),
  loading: Loading,
})

const client = configureApollo({ uri: 'https://www.graphqlhub.com/graphql' })
const reducer = createReducer(client)
const store = configureStore({ reducer })

function App() {
  return (
    <Router>
      <ApolloProvider store={store} client={client}>
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
      </ApolloProvider>
    </Router>
  )
}

export default App
