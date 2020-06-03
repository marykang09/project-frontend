

function fetchingPoses(){
    return (dispatch) => {
        fetch("http://localhost:3000/poses")
        .then(response => response.json())
        .then(poses => { dispatch(fetchedPoses(poses))})
    }
}

function fetchedPoses(poses){
    return {type: "FETCHED_POSES", payload: poses}
}

export { fetchingPoses }