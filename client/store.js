import {createStore,compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';

import rootReducer from './reducers/index';

import  products from './data/products';

const defaultState={products};

const store =createStore(rootReducer,defaultState);

//export const history =syncHistoryWithStore()
export default store;