import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import SequencesList from './SequencesList'
import Sequence from './Sequence'
import { connect } from 'react-redux'
import { Button, Form, FormControl, Container, Row } from 'react-bootstrap'
import { addingNewSequence } from '../redux/actions'
import styled from 'styled-components';
import swal from 'sweetalert'

class MySequencesPage extends React.Component {
    constructor(){
        super()
        this.state = {
            showCreateForm: false,
            newSequenceName: "",
            newSequenceNotes: ""
        }
    }

    showCreateFormDiv = () => {
        if (this.state.showCreateForm){
            return (
                <div>
                    <Container>
                    <Row className="justify-content-md-center">
                            <Form inline>
                            <FormControl 
                                type="text" 
                                placeholder="NEW SEQUENCE NAME" 
                                className="mr-sm-2"
                                value={this.state.newSequenceName}
                                onChange={(event) => this.setState({ newSequenceName: event.target.value})} />

                            <FormControl 
                                type="text" 
                                placeholder="NEW SEQUENCE NOTES" 
                                className="mr-sm-2"
                                value={this.state.newSequenceNotes}
                                onChange={(event) => this.setState({ newSequenceNotes: event.target.value})} />
                            
                            <Button className="mybtn" variant="flat" size="sm" onClick={this.onCreate}> CREATE </Button>
                            </Form>
                        </Row>
                    </Container>
                </div>
                )
        }
    }

    onShowCreateForm = (event) => {
        event.preventDefault()
        this.setState({ showCreateForm: !this.state.showCreateForm})
    }

    validateSequenceNameInput = () => {
        if (this.state.newSequenceName.length === 0){
            swal({
                text: "Sequence name is required",
                value: true,
                visible: true,
                className: "swal",
                closeModal: true,
                button: "OK"
              })
        }
    }

    onCreate = (event) => {
        console.log("clicked to create new sequence")
        event.preventDefault()
        this.validateSequenceNameInput()

        let info = {
            userId: this.props.currentUser.id,              //check this, just added after seeing it after auth
            newSequenceName: this.state.newSequenceName,
            newSequenceNotes: this.state.newSequenceNotes
        }
        
        this.props.addingNewSequence(info)

        this.setState({

            newSequenceName: "",
            newSequenceNotes: "",
    
        }) // this is to reset the form 
    }

    render(){

        const Title = styled.h1`
        font-size: 2.0em;
        text-align: center;
        color: white;
        `;
    
        const Wrapper = styled.section`
        padding: 3em;
        background: #a3b9c9;
        `;

        console.log("inside mysequences page", this.props.sequences)

        return (!this.props.sequences ? null : 

                <div>
                    <h1> MY SEQUENCES </h1>
                    <br></br>
                    <div className="line"></div>
                    <br></br>
                    <Button className="mybtn" ariant="flat" size="md" onClick={this.onShowCreateForm}  >    
                        {this.state.showCreateForm ? "FINISHED ADDING" : "ADD A NEW SEQUENCE"}
                    </Button>
                    <br></br>
                    <br></br>
                    {this.showCreateFormDiv()}
                    <br></br>
                    &nbsp;
                <br></br>
                {this.props.sequences.length === 0 ? <h2>NO SEQUENCES YET</h2> : <SequencesList/> }
                
                
                </div>
                )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        sequences: state.sequences,
        currentUser: state.currentUser //check this, just added after auth
    }
}

const mapDispatchToProps = dispatch => ({
    addingNewSequence: (info) => { dispatch (addingNewSequence(info))}

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MySequencesPage))