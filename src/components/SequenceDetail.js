import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import { foundSequence } from "../redux/actions"


const SequenceDetail = (props) => {
    console.log("SequenceDetail's props:", props)

    return (!props.sequence ? null : 
    //need to do this to account for INIT state = []
        <div>
            <h1>Sequence Details</h1>
            <h3>Name: {props.sequence.name}</h3>
            <p>
                Pose Count: {props.sequence.sequence_poses.length}
                <br></br>
                Notes: {props.sequence.notes}
            </p>
            
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log("SequenceDetail's ownProps", ownProps)
    //first, find the current sequence
    //then, need to find the poses for this sequence
    //use seqence_poses array, use the pose_id
    //map over the poses array in store and find match

    let sequenceId = parseInt(ownProps.match.params.id)
    //have to parseInt because the params id is a string

    return {
        sequence: state.sequence
        // sequence_poses: state.sequences.find(sequence => sequence.id === sequenceId).sequence_poses
        // sequence_poses: state.poses.filter(pose => pose.id === state.sequence.sequence_poses.pose_id)
        // mapDispatchToProps()
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         foundSequence: (sequence) => {dispatch(foundSequence(sequence))}
//     }
// }


export default withRouter(connect(mapStateToProps)(SequenceDetail))
// export default SequenceDetail
