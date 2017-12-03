import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

import reducer from './reducers';

const IS_DEV = false
const middlewares = [];
if (IS_DEV) {
    middlewares.push(createLogger({
        duration: true,
        collapsed: true
    }));
}
const store = createStore(reducer,applyMiddleware(...middlewares))

export default store
