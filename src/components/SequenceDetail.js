import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import SequencePose from './SequencePose'
import {Button, ButtonGroup, ButtonToolbar, Col, Container, Row, Alert} from 'react-bootstrap'
import { deleteSequence } from '../redux/actions'
import styled from 'styled-components';
import swal from '@sweetalert/with-react'

class SequenceDetail extends React.Component {
    constructor(){
        super()
        this.state = {
            showNotes: false,
            showAlert: false
        }
    }

    sortedPoses = () => {
        return(!this.props.sequence ? null : 
        this.props.sequence.sequence_poses.sort((a, b) => (a.position_num  > b.position_num) ? 1: -1)
    //list.sort((a, b) => (a.color > b.color) ? 1 : -1)
        )
    }

    onDelete = () => {
        // event.preventDefault()
        // this.setState({ showAlert: true})
        // this.handleShowAlert()
        // why this does not work??
        swal({
            className: "swal",
            text: "Sequence deleted",
            buttons: false,
            timer: 1000,
        })

        let info = {
            sequenceId: this.props.sequence.id
        }

        this.props.deleteSequence(info)
    }

    handleHideAlert = () => this.setState({ showAlert: false })

    handleShowAlert = (event, onClick) => {
        event.preventDefault()
        console.log("hit the handleShowAlert")
        this.setState({ showAlert: true })
        
        swal({
            className: "swal",
            text: "Delete this sequence?",
            button: "Cancel",
            content: (          
                    <button className="swal-button"  onClick={this.onDelete}>Continue</button>

            )
        })
        
        
    }

   
    onReadNotes = (event) => {
        event.preventDefault()
        this.setState({ showNotes: !this.state.showNotes})
    }

    showReadNotesDiv = () => {
        if (this.state.showNotes){
            return (
                <div>
                    <Container>
                        <Row className="justify-content-md-center">
                            <p>
                                {this.props.sequence.notes}
                            </p>
                        </Row>
                    </Container>
                </div>
            )
        }
    }



    render(){

        const Title = styled.h1`
        font-size: 2.5em;
        text-align: center;
        color: white;
        `;
    
        const Wrapper = styled.section`
        padding: 2.5em;
        background: #a3b9c9;
        `;

        const TitleWrapper = styled.section`
        padding: 2.5em;
        background: #ABDAE1;
        `;

        return (!this.props.sequence ? null : 
        //need to do this to account for INIT state = []
        
            <div className="padding">
                <h1> SEQUENCE: {this.props.sequence.name} </h1>
                <br></br>
                <div className="line"></div>
                 <br></br>
                <Container>
                    <Wrapper>
                        <Title>
                            
                            {this.props.sequence.sequence_poses.length === 0 ? "ADD SOME POSES" : `POSE COUNT: ${this.props.sequence.sequence_poses.length}`}
                            
                        </Title>
                    </Wrapper>



                    <br></br>
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
                            <Button className="mybtn" variant="flat" size="md"> EDIT </Button>
                        </Link>    
                    </ButtonGroup>
                    &nbsp;
                    <ButtonGroup>
                            <Button className="mybtn" variant="flat" size="md" onClick={this.handleShowAlert}> DELETE </Button>
                             {/* {this.state.showAlert ? this.showAlert() : null} */}
                            
                    </ButtonGroup>
                    
                    </>
                    <br></br>


                        <br></br>
                        POSES IN SEQUENCE:  
                        <Row className="justify-content-md-center">
                        <Col md="auto"></Col>
                        {this.sortedPoses().map(pose => <SequencePose pose={pose} key={pose.id} editing={false}/>)}
                        </Row>
                        <br></br>
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <Button className="mybtn" variant="flat" size="sm" onClick={this.onReadNotes}> {this.state.showNotes ? "HIDE NOTES" : "READ NOTES" }</Button>
                                <br></br>
                                <br></br>
                                {this.showReadNotesDiv()}
                                <br></br>
                                <br></br>
                            </Col>
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteSequence: info => {
            dispatch(deleteSequence (info, ownProps))
            ownProps.history.push('/sequences')
        }
    } // this reroutes after deleting the sequence, back to sequence page
}
   


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SequenceDetail))

