import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import SequencePose from './SequencePose'
import {Button, ButtonGroup, ButtonToolbar, Col, Container, Row} from 'react-bootstrap'
import { deleteSequence } from '../redux/actions'

class SequenceDetail extends React.Component {


    sortedPoses = () => {
        return(!this.props.sequence ? null : 
        this.props.sequence.sequence_poses.sort((a, b) => (a.position_num  > b.position_num) ? 1: -1)
    //list.sort((a, b) => (a.color > b.color) ? 1 : -1)
        )
    }

    onDelete = (event) => {
        event.preventDefault()

        let info ={
            sequenceId: this.props.sequence.id
        }

        this.props.deleteSequence(info)
    }

    render(){
        return (!this.props.sequence ? null : 
        //need to do this to account for INIT state = []
        
            <div>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto"></Col>
                        <h1>Sequence: {this.props.sequence.name} </h1>
                    </Row>
                    <br></br>

                    <>
                    <style type="text/css">
                        {`
                        .btn-flat {
                        background-color: #ABDAE1;
                        color: white;
                        }

                        .btn-md {
                        padding: 1rem 1.5rem;
                        font-size: 1.5rem;
                        }
                        `}
                    </style>
                    
                    
                    <ButtonGroup>
                        <Link to={`${this.props.sequence.id}/edit`}>
                        {/* why wont the link above work?!?! */}
                        {/* <Link to={`/sequences/${this.props.sequence.id}`}> */}
                            <Button variant="flat" size="md"> Edit </Button>
                        </Link>    
                    </ButtonGroup>
                    &nbsp;
                    <ButtonGroup>
                            <Button variant="flat" size="md" onClick={this.onDelete}> Delete </Button>
                    </ButtonGroup>
                    
                    </>
                    <br></br>

                    <h2>
                        {/* Pose Count: {props.sequence.sequence_poses.length} */}
                        <br></br>
                        Pose Count: {this.props.sequence.sequence_poses.length}
                        <br></br>
                    </h2>
                        Poses:  
                        <Row className="justify-content-md-center">
                        <Col md="auto"></Col>
                        {this.sortedPoses().map(pose => <SequencePose pose={pose} key={pose.id} editing={false}/>)}
                        </Row>
                        <br></br>
                        <Row className="justify-content-md-center">
                            <p>
                            Notes: {this.props.sequence.notes}
                            </p>
                        </Row>
                </Container>
            </div>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    // console.log("SequenceDetail's ownProps", ownProps)
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

const mapDispatchToProps = dispatch => ({
    deleteSequence: (info) => {dispatch(deleteSequence(info))}
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SequenceDetail))

