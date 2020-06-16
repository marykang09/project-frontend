import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import {Container, Row, Col, Button, Card, CardColumns} from 'react-bootstrap'
import { connect } from 'react-redux'

class Quote extends React.Component {

    // onAdd = event => {
    //     event.preventDefault()

    //     let info = {
    //         sequenceId: this.props.sequence.id,
    //         pose: this.props.pose
    //     }
        
    //     this.props.addingToSequence(info)
    // }

    render(){
        return (
            
            <div>
                {/* <div className="card-columns">
                    <div className="card" >
                        <blockquote className="blockquote mb-0">
                            <p> {this.props.quote.quote}</p>
                            <footer className="blockquote-footer">
                                <small> {this.props.quote.author}</small>
                            </footer>
                        </blockquote>
                    </div>
                </div> */}
                
                    <CardColumns style={{display: 'flex', flexDirection: 'row'}}>
                        <Card className="p-3" style={{flex: 1}}>
                            <blockquote className="blockquote mb-0 card-body">
                                <p>{this.props.quote.quote}</p>
                            <footer className="blockquote-footer">
                                <small className="text-muted"> {this.props.quote.author} </small>
                            </footer>
                            </blockquote>
                        </Card>
                    </CardColumns>
                
 



                
            </div>
                /* <Card className='card' border="light" style={{ width: '18rem' }}>
                <Card.Body>
                        <Card.Title> {this.props.quote.quote} </Card.Title>
                        <Card.Text>
                                    {this.props.quote.author} <br></br>
                                    
                            
                            <Button variant="flat" size="md" onClick={this.onAdd}>
                                Add
                            </Button>
                                    
                    
                        </Card.Text>
                </Card.Body>
                </Card> */
            
        )
    }
}



// const mapDispatchToProps = dispatch => ({
//     addingToSequence: (info) => { dispatch ( addingToSequence(info))}
// })

export default Quote