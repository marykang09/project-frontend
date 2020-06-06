import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import SequencePose from './SequencePose'
// import { foundSequence } from "../redux/actions"


const SequenceDetail = (props) => {
    console.log("SequenceDetail's props:", props)

    return (!props.sequence ? null : 
    //need to do this to account for INIT state = []
        <div>
            <h1>Sequence Details</h1>
            <h3>Name: {props.sequence.name}</h3>
            <p>
                {/* Pose Count: {props.sequence.sequence_poses.length} */}
                <br></br>
                Pose Count: {props.sequence.sequence_poses.length}
                <br></br>
            </p>
                Poses:  
                {props.sequence.sequence_poses.map(pose => <SequencePose pose={pose} />)}
                <br></br>
                Notes: {props.sequence.notes}
               
            
            
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
        sequence: state.sequences.find(s => parseInt(s.id) === sequenceId)
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         foundSequence: (sequence) => {dispatch(foundSequence(sequence))}
//     }
// }


export default withRouter(connect(mapStateToProps)(SequenceDetail))
// export default SequenceDetail
