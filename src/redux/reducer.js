import { combineReducers } from 'redux'

const posesReducer = (state=[], action) => {
    switch (action.type) {
        case "FETCHED_POSES":
            return action.payload
        default: 
            return state
    }
}

const sequencesReducer = (state=[], action) => {
    switch (action.type){
        case "FETCHED_SEQUENCES":
            return action.payload
        default: 
            return state
    }
}

const searchTextReducer = (state="", action) => {
    switch (action.type){
        case "CHANGE_SEARCH_TEXT":
            return action.payload
        default:
           return state
    }
}


const clickedSequenceReducer = (state="", action) => {
    switch (action.type){
        case "CLICKED_SEQUENCE":
            return action.payload
        default:
            return state
    }
}

const editingReducer = (state=false, action) => {
    switch (action.type){
        case "EDITING_SEQUENCE":
            return action.payload
        default: 
            return state 
    }
}

const rootReducer = combineReducers({
    poses: posesReducer,
    sequences: sequencesReducer,
    searchText: searchTextReducer,
    sequence: clickedSequenceReducer,
    editMode: editingReducer
})


export default rootReducer