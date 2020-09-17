import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import {Container, Row, Col, Button, Card, CardColumns, OverlayTrigger, Tooltip} from 'react-bootstrap'
import { connect } from 'react-redux'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { addingQuote, removingQuote } from '../redux/actions'

class Quote extends React.Component {

    onDoubleClick = event => {
        event.preventDefault()

        let userQuoteObj = {
            user_id: this.props.currentUser.id,
            quote_id: this.props.quote.id,
        }

        let userQuoteId
                
        if (this.props.userQuotes.find(q => q.quote_id === this.props.quote.id)){
            console.log("delete this quote from userQuotes")
            let theID = this.props.userQuotes.find(q =>q.quote_id === this.props.quote.id).id
            console.log("theID", theID)
            this.props.removingQuote(theID)
        } else {
            console.log("adding this quote to userQuotes")
            this.props.addingQuote(userQuoteObj)
        }

        console.log(this.props.userQuotes.find(q => q.quote_id === this.props.quote.id) ? "yes already liked" : "no, not liked")

    }

    renderToolTip = (props) => {
        if (this.props.userQuotes.find(q => q.quote_id === this.props.quote.id)){
            return (
            <Tooltip id="button-tooltip" {...props}> Double Click to Remove </Tooltip>
            )
        } else {
            return (
                <Tooltip id="button-tooltip" {...props}> Double Click to Add </Tooltip>
            )
        }
    }

    render(){
        // console.log("inside Quote, what is this.props.userQuotes?", this.props.userQuotes)
        // console.log("inside Quotes, what is this quote?", this.props.quote.id)


        return (
            
            <div className="inspPage">
                    <CardColumns className="quoteCol">
                    {/* <CardColumns style={{display: 'flex'}}> */}
                    <OverlayTrigger placement="right" delay={{show: 100, hide: 200}} overlay={this.renderToolTip}>
                        <Card className="p-3" style={{flex: 1}}>
                            <blockquote className="blockquote mb-0 card-body">
                                <p>{this.props.quote.quote}</p>
                            <footer className="blockquote-footer">
                                <small className="text-muted"> {this.props.quote.author} </small>
                            </footer>
                            </blockquote>
                            

            <div className="icon" onDoubleClick={this.onDoubleClick}> {this.props.userQuotes.find(q => q.quote_id === this.props.quote.id) ? <FcLike/> : <FcLikePlaceholder/>} </div>
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
        currentUser: state.currentUser,
        userQuotes: state.userQuotes
    }
}


const mapDispatchToProps = dispatch => ({
    addingQuote: (userQuoteObj) => { dispatch ( addingQuote(userQuoteObj))},
    removingQuote: (theID) => { dispatch ( removingQuote(theID))}
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Quote))