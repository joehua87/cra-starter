// @flow

import React from 'react'
import { connect } from 'react-redux'

function Home({
  redux: { name },
}: {
  redux: {
    name: string,
  },
}) {
  return (
    <div>
      <h2>Home,</h2>
      <h3>{name}</h3>
      <div><b>{name}</b> is bind from redux</div>
    </div>
  )
}

export default connect(state => ({ redux: state.app }))(Home)
