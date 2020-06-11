const url = "http://localhost:3000"

/////////////////////////////////////////////////////////////////////////////////////////

function fetchingPoses(){
    return (dispatch) => {
        fetch(`${url}/poses`)
        .then(response => response.json())
        .then(poses => { dispatch(fetchedPoses(poses))})
    }
}

function fetchedPoses(poses){
    return {type: "FETCHED_POSES", payload: poses}
}

/////////////////////////////////////////////////////////////////////////////////////////

function fetchingSequences(){
    return (dispatch) => {
        fetch(`${url}/sequences`)
        .then(response => response.json())
        .then(sequences => { dispatch(fetchedSequences(sequences))})
    }
}

function fetchedSequences(sequences){
    return {type: "FETCHED_SEQUENCES", payload: sequences}
}

/////////////////////////////////////////////////////////////////////////////////////////

function changeSearchText(value){
    return {type: "CHANGE_SEARCH_TEXT", payload: value}
}

/////////////////////////////////////////////////////////////////////////////////////////

function clickedSequence(sequence){
    // console.log("in actions", sequence)
    return {type: "CLICKED_SEQUENCE", payload: sequence}
}

/////////////////////////////////////////////////////////////////////////////////////////

function addingToSequence(info){
    return (dispatch, getState) => {
        let sequence = getState().sequences.find(s => s.id === info.sequenceId)
        let currentSequencePoses = sequence.sequence_poses

        fetch(`${url}/sequence_poses`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                sequence_id: info.sequenceId,
                pose_id: info.pose.id,
                position_num: currentSequencePoses.length
            })
        })
        .then(response => response.json())
        .then(sequencePose => dispatch(addedToSequence(sequencePose)))
    } // this updates the backend, then dispatches to update frontend
}

function addedToSequence(sequencePose){
    return {
        type: "CREATED_SEQUENCE_POSE",
        payload: sequencePose
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

function removingFromSequence(info){
    return (dispatch) => {
        
        fetch(`${url}/sequence_poses/${info.sequencePoseId}`, {
            method: "DELETE"
        }) // this updates the backend

        dispatch(removedFromSequence(info))
    } // this will update the frontend
}

function removedFromSequence(info){

    return {
        type: "REMOVED_SEQUENCE_POSE",
        payload: info
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

function deleteSequence(info){
    return (dispatch) => {
        fetch(`${url}/sequences/${info.sequenceId}`, {
            method: "DELETE"
        }) //this updates the backend

        dispatch(deletedSequence(info))
    }
}

function deletedSequence(info){
    
    return {
        type: "DELETED_SEQUENCE",
        payload: info
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

function addingNewSequence(info){
    return (dispatch, getState) => {
        fetch(`${url}/sequences`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                user_id: 9,
                name: info.newSequenceName,
                notes: info.newSequenceNotes
            })
        })
        .then(response => response.json())
        .then(sequence => dispatch(addedSequence(sequence)))
    }
}

function addedSequence(sequence){

    return {
        type: "ADDED_SEQUENCE",
        payload: sequence
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

function orderSequencePoseList( oldIndex, newIndex, sequenceId){
    return {
        type: "REORDER_SEQUENCE_POSES",
        payload: { oldIndex, newIndex, sequenceId }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////

function onSaveNewOrder(sequence){
    console.log("in onSaveNewOrder in actions, what is sequence?:", sequence)
    console.log("in onSaveNewOrder in actions, what is sequenceposes?:", sequence.sequence_poses)
    console.log("sp[0]", sequence.sequence_poses[0])
    console.log(sequence.sequence_poses.indexOf(sequence.sequence_poses[0]))
    // debugger

    return (dispatch, getState) => {

        let sequencePoseArray = sequence.sequence_poses

        sequencePoseArray.forEach(sp => {
            fetch(`${url}/sequence_poses/${sp.id}`, {
                method: "PATCH",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({
                    position_num: sequencePoseArray.indexOf(sp)
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
        })

    }
}

/////////////////////////////////////////////////////////////////////////////////////////

export { fetchingPoses, fetchingSequences, changeSearchText, clickedSequence, addingToSequence, addedToSequence, removingFromSequence, removedFromSequence, deleteSequence, addingNewSequence, addedSequence, orderSequencePoseList, onSaveNewOrder }