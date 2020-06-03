import { combineReducers } from 'redux'

const posesReducer = (state = [], action) => {
    switch (action.type) {
        case "FETCHED_POSES":
            return action.payload
        default: 
            return state
    }
}

const rootReducer = combineReducers({
    poses: posesReducer
})

export default rootReducer