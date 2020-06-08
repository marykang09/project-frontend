const url = "http://localhost:3000"

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


function changeSearchText(value){
    return {type: "CHANGE_SEARCH_TEXT", payload: value}
}

function clickedSequence(sequence){
    // console.log("in actions", sequence)
    return {type: "CLICKED_SEQUENCE", payload: sequence}
}

function addingToSequence(info){
    return (dispatch, getState) => {
        let sequence = getState().sequences.find(s => s.id === info.sequenceId)
        let currentSequencePoses = sequence.sequence_poses
        // let newSequencePose = {
        //     sequnce_id: info.sequenceId,
        //     pose_id: info.pose.id,
        //     position_num: currentSequencePoses.length + 1,
        //     pose: {
        //         id: info.pose.id,
        //         english_name: info.pose.english_name,
        //         sanskrit_name: info.pose.sanskrit_name,
        //         img_url: info.pose.img_url,
        //         muscle_identifer: info.pose.muscle_identifer
        //     }
        // }

        // let obj = {
        //     sequence_poses: [...currentSequencePoses, newSequencePose]
        // }
        //fetch(`${url}/sequences/${info.sequenceId}`

        fetch(`${url}/sequence_poses`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                sequence_id: info.sequenceId,
                pose_id: info.pose.id,
                position_num: currentSequencePoses.length ++
            })
        })
        .then(response => response.json())
        .then(sequencePose => dispatch(addedToSequence(sequencePose)))
    } // this updates the backend
}

function addedToSequence(sequencePose){
    return {
        type: "CREATED_SEQUENCE_POSE",
        payload: sequencePose
    }
}

function removingFromSequence(info){
    return (dispatch, getState) => {
        
        fetch(`${url}/sequence_poses/${info.sequencePoseId}`, {
            method: "DELETE"
        }) // this updates the backend

        let sequence = getState().sequences.find(s => s.id === info.sequenceId)
        let updatedSequencePoses = sequence.sequence_poses
        console.log(updatedSequencePoses)

        // dispatch(removedFromSequence(info.sequenceId))
    } 
}

function removedFromSequence(sequenceId){
    return {
        type: "REMOVED_SEQUENCE_POSE",
        payload: sequenceId
    }
}





export { fetchingPoses, fetchingSequences, changeSearchText, clickedSequence, addingToSequence, addedToSequence, removingFromSequence }