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

function foundSequence(sequence){
    console.log("in actions", sequence)
    return {type: "FOUND_SEQUENCE", payload: sequence}
}

export { fetchingPoses, fetchingSequences, changeSearchText, foundSequence }