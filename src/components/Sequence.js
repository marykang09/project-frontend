import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { clickedSequence } from "../redux/actions"
import Card from 'react-bootstrap/Card'

const Sequence = (props) => {
    console.log("Sequence's props:", props)

    return (
        <div>

            <Card border="light" style={{ width: '18rem' }}>
                <Card.Body>
                    
                        <Card.Title> Sequence: </Card.Title>
                    
                            <Card.Text>
                                <Link 
                                    className="item" 
                                    to={`/sequences/${props.sequence.id}`}
                                    onClick={()=> {props.clickedSequence(props.sequence) }} >
                                                {props.sequence.name}
                                </Link>
                                <br></br>
                                <br></br>
                                Pose Count: {props.sequence.sequence_poses.length}

                            </Card.Text>
                </Card.Body>            
            </Card>
            
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