import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-fetch'

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

export default function configureApollo({ uri }: { uri: string }) {
  return new ApolloClient({
    dataIdFromObject: result => result._id || result.id,
    link: new HttpLink({
      uri,
      opts: {
        credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      },
    }),
    cache: new InMemoryCache(),
  })
}
