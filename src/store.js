import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore,persistCombineReducers,persistReducer} from 'redux-persist'
import storage from 'redux-persist/es/storage'

import reducers from './reducers';
import {IS_DEV} from './config/const'

const config = {
	key: 'root',
	storage,
}
const reducer = persistReducer(config, reducers)
const middlewares = [];
if (IS_DEV) {
    middlewares.push(createLogger({
        duration: true,
        collapsed: true
    }));
}
const store = createStore(reducer,applyMiddleware(...middlewares))
persistStore(store)
export default store
