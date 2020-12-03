import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { clickedSequence } from "../redux/actions"



const Sequence = (props) => {
    // console.log("Sequence's props:", props)

    return (!props.sequence ? null :

        <section id="sequence-card">
                <Link 
                    className="seq-card-link" 
                    to={`/sequences/${props.sequence.id}`}
                    onClick={()=> {props.clickedSequence(props.sequence) }} >
                    <div className="seq-card"> 
                        <h3> {props.sequence.name} </h3>
                        <p> pose count: {props.sequence.sequence_poses.length} </p>
                    </div>
                </Link>
        </section>
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