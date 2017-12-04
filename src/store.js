import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

import reducer from './reducers';
import {IS_DEV} from './config/const'

const middlewares = [];
if (IS_DEV) {
    middlewares.push(createLogger({
        duration: true,
        collapsed: true
    }));
}
const store = createStore(reducer,applyMiddleware(...middlewares))

export default store
