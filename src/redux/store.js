import { createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//this is from thunk so that we can have the devtools plus thunk middleware
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store

