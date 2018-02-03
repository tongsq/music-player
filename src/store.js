import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore,persistCombineReducers,/*persistReducer*/} from 'redux-persist'
import storage from 'redux-persist/es/storage'
import thunk from 'redux-thunk'

import reducers from './reducers';
import {progressChangeStore} from './actions';
import {IS_DEV} from './config/const'

const config = {
	key: 'root',
	blacklist: 'player.musicList',
	storage,
}
const reducer = persistCombineReducers(config, reducers)
const middlewares = [thunk];
if (IS_DEV) {
    middlewares.push(createLogger({
        duration: true,
        collapsed: true
    }));
}
const store = createStore(reducer,applyMiddleware(...middlewares))
persistStore(store, null,()=>{
    let state = store.getState()
    if (state.player.progress !== 0){
        store.dispatch(progressChangeStore(state.player.progress/100))
    }
})
export default store
