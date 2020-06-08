import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import {Button, Card} from 'react-bootstrap'
import { connect } from 'react-redux'
import { updatingSequence } from '../redux/actions'

class Pose extends React.Component {
    constructor(props){
        super(props)
        // this.state = {
        //     sequenceId: this.props.sequence.id,
        //     pose: this.props.pose
        // }
    }

    onAdd = event => {
        event.preventDefault()

        let info = {
            sequenceId: this.props.sequence.id,
            pose: this.props.pose
        }
        
        this.props.updatingSequence(info)
    }

    render(){
        return (
            
            <div>
                <Card border="light" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.pose.img_url} />
                <Card.Body>
                    <Link className="item" to={`/poses/${this.props.pose.id}`} >
                        <Card.Title> {this.props.pose.english_name} </Card.Title>
                    </Link>
                        <Card.Text>
                                    {this.props.pose.sanskrit_name} <br></br>
                                    {this.props.editing ? (
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
                            
                                                <Button variant="flat" size="md" onClick={this.onAdd}>
                                                    Add
                                                </Button>
                                                </> ) : null
                                    }
                        </Card.Text>
                </Card.Body>
                </Card>
            </div>
            
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updatingSequence: (info) => { dispatch ( updatingSequence(info))}
})

export default connect(null, mapDispatchToProps)(Pose)