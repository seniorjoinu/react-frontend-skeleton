import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter, push, routerMiddleware, routerReducer} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import {applyMiddleware, combineReducers, createStore} from 'redux'

import reducers from './state/reducers'
import Index from "./components/pages/Index";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Index1 from "./components/pages/Index1";

const history = createHistory();
const router = routerMiddleware(history);

export const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(router, thunk, logger)
);

export const doAction = (type, payload) => store.dispatch({type, payload});
export const doNavigate = url => store.dispatch(push(url));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div id='page-wrapper'>
                <Route exact path='/' component={Index}/>
                <Route path='/about' component={Index1}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);