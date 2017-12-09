/* eslint-disable global-require */

import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { IntlProvider, addLocaleData } from 'react-intl'
import vi from 'react-intl/locale-data/vi'
// import { LocaleProvider } from 'antd'
// import enUS from 'antd/lib/locale-provider/en_US'
import configureStore from 'store/configureStore'
import configureApollo from 'store/configureApollo'
import createReducer from 'reducers'
import { endpoint } from 'config'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

addLocaleData(vi)

const client = configureApollo({ uri: `${endpoint}/graphql` })
const reducer = createReducer()
const store = configureStore({ reducer })
const rootEl = document.getElementById('root')

const Wrapper = ({ children }: { children: any }) => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <IntlProvider defaultLocale="vi" locale="vi">
        {/* <LocaleProvider locale={enUS}>{children}</LocaleProvider> */}
        {children}
      </IntlProvider>
    </Provider>
  </ApolloProvider>
)

ReactDOM.render(
  <Wrapper>
    <App />
  </Wrapper>,
  rootEl,
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <Wrapper>
        <NextApp />
      </Wrapper>,
      rootEl,
    )
  })
}

registerServiceWorker()
