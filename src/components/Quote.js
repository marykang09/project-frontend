import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import {Container, Row, Col, Button, Card, CardColumns, OverlayTrigger, Tooltip} from 'react-bootstrap'
import { connect } from 'react-redux'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { addingQuote } from '../redux/actions'

class Quote extends React.Component {

    onDoubleClick = event => {
        event.preventDefault()

        let userQuoteObj = {
            user_id: this.props.currentUser.id,
            quote_id: this.props.quote.id
        }
        
        this.props.addingQuote(userQuoteObj)
    }

    renderToolTip = (props) => {
        return (
        <Tooltip id="button-tooltip" {...props}> Double Click to Add </Tooltip>
        )
    }

    render(){


        return (
            
            <div>
                    <CardColumns style={{display: 'flex'}}>
                    <OverlayTrigger placement="right" delay={{show: 150, hide: 200}} overlay={this.renderToolTip}>
                        <Card className="p-3" style={{flex: 1}}>
                            <blockquote className="blockquote mb-0 card-body">
                                <p>{this.props.quote.quote}</p>
                            <footer className="blockquote-footer">
                                <small className="text-muted"> {this.props.quote.author} </small>
                            </footer>
                            </blockquote>
                            
                            
                                <div className="icon" onDoubleClick={this.onDoubleClick}><FcLikePlaceholder/></div>
                            </Card>
                        </OverlayTrigger>
                    </CardColumns>
            </div>

                                /* <div className="card-columns">
                    <div className="card" >
                        <blockquote className="blockquote mb-0">
                            <p> {this.props.quote.quote}</p>
                            <footer className="blockquote-footer">
                                <small> {this.props.quote.author}</small>
                            </footer>
                        </blockquote>
                    </div>
                </div> */


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

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}


const mapDispatchToProps = dispatch => ({
    addingQuote: (userQuoteObj) => { dispatch ( addingQuote(userQuoteObj))}
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Quote))