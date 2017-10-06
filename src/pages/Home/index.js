// @flow

import { compose } from 'redux'
import { connect } from 'react-redux'
import Home from './Home'
import connectQuery from './connectQuery'

export default compose(
  connect(state => ({ redux: state.app })),
  connectQuery,
)(Home)
