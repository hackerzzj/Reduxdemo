import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import thunk  from 'redux-thunk'
const compseEnhancer = compose(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose)
const enhancer = compseEnhancer(applyMiddleware(thunk))
const store = createStore(
    reducer,
    enhancer
    )
export default store