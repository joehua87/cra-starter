// @flow

import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

export const readQuery = gql`
# Hit the Play button above!
# Hit "Docs" on the right to explore the API
{
  graphQLHub
  twitter {
    user (identifier: name, identity: "clayallsopp") {
      created_at
      description
      id
      screen_name
      name
      profile_image_url
      url
      tweets_count
      followers_count
      tweets(limit: 1) {
        text
      }
    }
    tweet(id: "687433440774459392") {
      text,
      retweets(limit: 2) {
        id,
        retweeted_status {
          id
        }
        user {
          screen_name
        }
      }
    }
    search(q: "Javascript", count: 1, result_type: mixed) {
      user {
        screen_name
      }
      id
      text
    }
  }
}
`

export default graphql(readQuery)
