import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import SequencePose from './SequencePose'
import { connect } from 'react-redux'
import { clickedSequence } from "../redux/actions"

const Sequence = (props) => {
    console.log("Sequence's props:", props)

    return (
        <div>
                <br>
                </br>
        
                <h2>Sequence Name:  
                <Link 
                    className="item" 
                    to={`/mysequences/${props.sequence.id}`}
                    onClick={()=> {props.clickedSequence(props.sequence) }} >
 
                            {props.sequence.name}
                </Link>
                </h2>
            
                <h2>Pose Count: {props.sequence.sequence_poses.length}</h2>

            </div>
    )
}

// const mapStateToProps = (state) => {

//     return {
//         poses: state.poses
//     }
// }

const mapDispatchToProps = dispatch => {
    
    return {
        clickedSequence: (sequence) => {dispatch(clickedSequence(sequence))},
        // foundSequencePoses: (sequence_poses) => {dispatch(foundSequencePoses(sequence_poses))}
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Sequence))
// export default Sequence