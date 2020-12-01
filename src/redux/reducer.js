import { combineReducers } from 'redux'
// import { arrayMove } from 'react-sortable-hoc'
import arrayMove from 'array-move';

const posesReducer = (state=[], action) => {
    switch (action.type) {
        case "FETCHED_POSES":
            return action.payload
        default: 
            return state
    }
}

// const filterPosesReducer = (state = [], action) => {
//     switch (action.type){
//         case "CLICKED_RADIO_BUTTON":
//             return action.payload
//             console.log(state.filter(pose => pose.category === action.payload))
//         case "CLICKED_RADIO_CATEGORY_ALL":
//             console.log(state.filter(pose => pose.category))
//         case "CLICKED_RADIO_ACTION":
//             return state.filter(pose => pose.action === action.payload)
//         case "CLICKED_RADIO_DIFFICULTY":
//             return state.filter(pose => pose.difficulty === action.payload)
//         default: 
//             return state
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////

const sequencesReducer = (state=[], action) => {
    switch (action.type){
        case "FETCHED_USER_SEQUENCES":
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
            // console.log("in reducer, action.payload:", action.payload)

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

        case "UPDATE_TO_SAVED_ORDER":
            // if sequence id === action.payload.sequenceId, then return the sequence with the new sequence poses saved
            return state.map(sequence => {
                if (sequence.id === action.payload.sequence_id){
                    let otherPoses = sequence.sequence_poses.filter(sp => sp.id !== action.payload.id)
                    // console.log([...otherPoses, action.payload])

                    return {
                        ...sequence,
                        sequence_poses: [...otherPoses, action.payload]
                    }
                } else {
                    return sequence
                }
            })
            // let updatedSequencePose = state.map(sequence => {
            //     if (sequence.id === action.payload.sequence_id){
            //         sequence.sequence_poses.map(sp => {
            //             if(sp.id === action.payload.id){
            //                 return {
            //                     sp: action.payload
            //                 }
            //             } else {
            //                 return sp
            //             }
            //         })
            //     } else {
            //         return sequence
            //     }
            // })
            // return updatedSequencePose

        default: 
            return state
    }
}

/////////////////////////////////////////////////////////////////////////////////////////


const quotesReducer = (state=[], action) => {
    switch (action.type) {
        case "FETCHED_QUOTES":
            return action.payload
        default: 
            return state
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

const userQuotesReducer = (state = [], action) => {
    switch(action.type){
        case "FETCHED_USER_QUOTES":
            return action.payload
        case "CREATED_USER_QUOTE":
            return [...state, action.payload]
        case "REMOVED_USER_QUOTE":
            return state.filter(userquote => userquote.id !== action.payload)
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

        case "ADD_TO_CLICKED_SEQUENCE":
            if (state.id === action.payload.sequence_id){
                return {
                    ...state,
                    sequence_poses: [...state.sequence_poses, action.payload]
                }
            } else {
                return state
            }
        
        case "REMOVE_FROM_CLICKED_SEQUENCE":
            if (state.id === action.payload.sequenceId){
                return {
                    ...state,
                    sequence_poses: state.sequence_poses.filter(sp => sp.id !== action.payload.sequencePoseId)
                }
            } else {
                return state
            }
        case "UPDATE_CLICKED_SEQUENCE":
            if (state.id === action.payload.sequenceId){
                return {
                    ...state,
                    sequence_poses: arrayMove(state.sequence_poses, action.payload.oldIndex, action.payload.newIndex)
                }
            } else {
                return state
            }
        default:
            return state
    }
}


/////////////////////////////////////////////////////////////////////////////////////////

const userReducer = (state = null, action) => {
    switch (action.type){
        case "SET_CURRENT_USER":
            return action.payload
        case "LOGOUT_CURRENT_USER":
            return null
        default:
            return state
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

const errorsReducer = (state=[], action) => {
    switch (action.type){
        case "LOGIN_ERROR":
            return action.payload
        default:
            return state
    }

}

/////////////////////////////////////////////////////////////////////////////////////////

const rootReducer = combineReducers({
    poses: posesReducer,
    // filteredPoses: filterPosesReducer,
    sequences: sequencesReducer,
    searchText: searchTextReducer,
    sequence: clickedSequenceReducer,
    quotes: quotesReducer,
    userQuotes: userQuotesReducer,
    currentUser: userReducer,
    errors: errorsReducer
})

export default rootReducer