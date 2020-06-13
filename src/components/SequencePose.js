import React from 'react'
import { connect } from 'react-redux'
import {Card, Image, Button} from 'react-bootstrap'
import { removingFromSequence } from '../redux/actions'
import SweetAlert from 'react-bootstrap-sweetalert'
import swal from 'sweetalert'

class SequencePose extends React.Component {

    onRemove = (event) => {
        event.preventDefault()

        let info = {
            sequencePoseId: this.props.pose.id,
            sequenceId: this.props.pose.sequence_id
        }

        this.props.removingFromSequence(info)
    }


    render(){
    console.log("SequencePose's props", this.props.pose)


    
    return (!this.props.pose ? null : 
        //need to do this to account for INIT state = []
        <div>
             <Card border="light" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.pose.pose.img_url} />
                <Card.Body>
                    <Card.Title>{this.props.pose.pose.english_name}</Card.Title>
                    <Card.Text>{this.props.pose.pose.sanskrit_name}</Card.Text>
                    {this.props.editing ? (
                                                <>
                                                <style type="text/css">
                                                    {`
                                                    .btn-flat {
                                                    background-color: #A09CB0;
                                                    color: white;
                                                    }
                            
                                                    .btn-md {
                                                    padding: 1rem 1.5rem;
                                                    font-size: 1.5rem;
                                                    }
                                                    `}
                                                </style>
                            
                                                <Button variant="flat" size="md" onClick={this.onRemove} >
                                                    REMOVE
                                                </Button>
                                                </> ) : null
                                    }
                </Card.Body>
            </Card>

        </div>
    )}
}

// const mapStateToProps = 

const mapDispatchToProps = dispatch => ({
    removingFromSequence: (info) => { dispatch (removingFromSequence(info))}
})

export default connect(null, mapDispatchToProps)(SequencePose)