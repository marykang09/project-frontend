import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {Col, Container, Row} from 'react-bootstrap'
import SequencePose from './SequencePose'
import Pose from './Pose'

class SequenceForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onSave = event => {
        // event.preventDefault()
        //updated sequence info
    }

    sortedPoses = () => {
        return(!this.props.sequence ? null : 
        this.props.sequence.sequence_poses.sort((a, b) => (a.position_num  > b.position_num) ? 1: -1)
    //list.sort((a, b) => (a.color > b.color) ? 1 : -1)
        )
    }

    render(){
        console.log("SequenceForm's props", this.props)

        return (!this.props.sequence ? null : 
                <div>
                    <Container>
                        <Row className="justify-content-md-center">
                        <Col md="auto"></Col>
                        <h1> Sequence: {this.props.sequence.name} </h1>
                        </Row>
                        <h2> Pose Count: {this.props.sequence.sequence_poses.length} </h2>

                        <h2> Poses in Sequence: </h2>
                        <Row className="justify-content-md-center">
                        <Col md="auto"></Col>
                        {this.sortedPoses().map(pose => <SequencePose pose={pose} sequence={this.props.sequence} editing={true}/>)}
                        </Row>
                        <br></br>
                        <Row className="justify-content-md-center">
                        <p>
                            Notes: {this.props.sequence.notes}
                        </p>
                        </Row>
                    </Container>
                    <br></br>
                    <Container>
                        <h2>Poses:</h2>
                    <Row className="justify-content-md-center">
                        <br></br>
                        <Col md="auto"></Col>
                            {this.props.poses.map(pose => (
                            <Pose
                                key={pose.id}
                                pose={pose}
                                sequence={this.props.sequence}
                                editing={true} />
                        ))}
                    </Row>
                    </Container>
                </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    let sequenceId = parseInt(ownProps.match.params.id)
    //have to parseInt because the params id is a string

    return {
        sequence: state.sequences.find(s => parseInt(s.id) === sequenceId),
        poses: state.poses.filter(
            pose => 
                pose.english_name.toLowerCase().includes(state.searchText.toLowerCase()) ||
                pose.sanskrit_name.toLowerCase().includes(state.searchText.toLowerCase())
        )
        // sequenceposes: state.sequence.sequence_poses.sort((a, b) => (a.position_num  > b.position_num) ? 1: -1)
    }
}

// const mapDispatchToProps = (dispatch) => {
//     updatingSequence: (sequence) => { dispatch (updatingSequence(sequence))}
// }

export default withRouter(connect(mapStateToProps)(SequenceForm))