// @flow

import { ApolloClient, createNetworkInterface } from 'react-apollo'

export default function configureApollo({
  uri,
}: {
  uri: string,
}) {
  return new ApolloClient({
    ssrMode: false,
    dataIdFromObject: result => result._id || result.id,
    networkInterface: createNetworkInterface({
      uri,
      // opts: {
      //   credentials: 'same-origin',
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // },
    }),
  })
}
