import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { clickedSequence } from "../redux/actions"
import Card from 'react-bootstrap/Card'

const Sequence = (props) => {
    console.log("Sequence's props:", props)

    return (
        <div>
                <Link 
                    className="item" 
                    to={`/sequences/${props.sequence.id}`}
                    onClick={()=> {props.clickedSequence(props.sequence) }} >
                    <Card border="light" style={{ width: '18rem' }}>
                        <Card.Body>
                                <Card.Title> SEQUENCE: </Card.Title>
                            
                                    <Card.Text>
            
                                            {props.sequence.name}
                                        
                                        <br></br>
                                        <br></br>
                                        POSE COUNT: {props.sequence.sequence_poses.length}

                                    </Card.Text>
                        </Card.Body>            
                    </Card>
                </Link>
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