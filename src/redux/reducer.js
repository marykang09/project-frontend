import { combineReducers } from 'redux'
import { arrayMove } from 'react-sortable-hoc'

const posesReducer = (state=[], action) => {
    switch (action.type) {
        case "FETCHED_POSES":
            return action.payload
        default: 
            return state
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

const sequencesReducer = (state=[], action) => {
    switch (action.type){
        case "FETCHED_SEQUENCES":
            return action.payload

        case "CREATED_SEQUENCE_POSE":
            return state.map(sequence => {
                if (sequence.id === action.payload.sequence_id) {
                    return {
                        ...sequence,
                        sequence_poses: [...sequence.sequence_poses, action.payload]
                    }
                } else {
                    return sequence
                }
            })

        case "REMOVED_SEQUENCE_POSE":
            return state.map(sequence => {
                if (sequence.id === action.payload.sequenceId){
                    return {
                        ...sequence,
                        sequence_poses: sequence.sequence_poses.filter(sp => sp.id !== action.payload.sequencePoseId)
                    }
                } else {
                    return sequence
                }
            })
        
        case "DELETED_SEQUENCE":
            return state.filter(sequence => sequence.id !== action.payload.sequenceId)
            
        case "ADDED_SEQUENCE":
            return [...state, action.payload]
            
        case "REORDER_SEQUENCE_POSES":
            console.log("in reducer, action.payload:", action.payload)

            let changedSequencePoses = state.map(sequence => {
                
                if (sequence.id === action.payload.sequenceId){
                    return {
                        ...sequence,
                        sequence_poses: arrayMove(sequence.sequence_poses, action.payload.oldIndex, action.payload.newIndex)
                    }
                } else { 
                    return sequence
                }
            })
            // debugger
            return changedSequencePoses
            //something like.. state.map(sequence => { if (sequence.id === action.payload.sequence_id){ return { ...sequence, sequence_poses: arrayMove}}})
        default: 
            return state
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

const searchTextReducer = (state="", action) => {
    switch (action.type){
        case "CHANGE_SEARCH_TEXT":
            return action.payload
        default:
           return state
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

const clickedSequenceReducer = (state="", action) => {
    switch (action.type){
        case "CLICKED_SEQUENCE":
            return action.payload
        default:
            return state
    }
}


/////////////////////////////////////////////////////////////////////////////////////////

const rootReducer = combineReducers({
    poses: posesReducer,
    sequences: sequencesReducer,
    searchText: searchTextReducer,
    sequence: clickedSequenceReducer
})

export default rootReducer