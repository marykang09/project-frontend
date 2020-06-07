const url = "http://localhost:3000/"

function fetchingPoses(){
    return (dispatch) => {
        fetch(`${url}poses`)
        .then(response => response.json())
        .then(poses => { dispatch(fetchedPoses(poses))})
    }
}

function fetchedPoses(poses){
    return {type: "FETCHED_POSES", payload: poses}
}

function fetchingSequences(){
    return (dispatch) => {
        fetch(`${url}sequences`)
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

function editingSequence(){
    return {type: "EDITING_SEQUENCE", payload: true}
}
// function fetchingSequencePoses(id){
//     console.log(id)
    
// }
// function foundSequencePoses(sequence_poses){
//     return {type: "FOUND_SEQUENCE_POSES", payload: sequence_poses}
// }

export { fetchingPoses, fetchingSequences, changeSearchText, clickedSequence, editingSequence }