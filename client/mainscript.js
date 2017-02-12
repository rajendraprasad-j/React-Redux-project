
import React from 'react'
import {render} from 'react-dom';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import Main from './main'
import Product from './components/product';
import PhotoGrid from './components/displayProduct';
import css from './style.styl';
import {Provider} from 'react-redux'
import store from './store'
import App from './app'
const test=(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Product}></IndexRoute>
                <Route path="/view/:productId" component={PhotoGrid} ></Route> 
            </Route>
        </Router>
    </Provider>
    
);

render(test,document.getElementById('root'));