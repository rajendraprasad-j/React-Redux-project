


import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {syncHistoryWithStore} from 'react-router-redux';

import rootReducer from './reducers/index';
const loggerMiddleware = createLogger()
// import {browserHistory} from 'react-router';

export function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}

// export const history =syncHistoryWithStore(browserHistory,store());
