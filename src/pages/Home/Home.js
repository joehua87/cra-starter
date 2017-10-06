// @flow

import React from 'react'

function Home({
  redux: { name },
  data: {
    twitter,
    loading,
  }
}: {
  redux: {
    name: string,
  },
  data: {
    twitter: any,
    loading: boolean,
  },
}) {
  if (loading) {
    return (
      <div>Loading GraphQL Data...</div>
    )
  }

  return (
    <div>
      <h2>Home,</h2>
      <h3>{name}</h3>
      <div><b>{name}</b> is bind from redux</div>
      <div>
        <h3>Data from Graphql</h3>
        <div>
          <p>User: {twitter.user.name}</p>
          <p>Description: {twitter.user.description}</p>
          <p>Tweets: {twitter.user.tweets_count}</p>
          <p>Followers: {twitter.user.followers_count}</p>
        </div>
      </div>
    </div>
  )
}

export default Home
