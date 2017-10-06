import { combineReducers } from 'redux'
import app from './app'

export default function createReducer(apolloClient) {
  return combineReducers({
    app,
    apollo: apolloClient.reducer(),
  })
}

