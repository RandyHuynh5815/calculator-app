import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer'
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, {firstVal: 0, op: null, secondVal: 0, isFirst: true, result: false, lastPressed: null}, applyMiddleware(thunk))