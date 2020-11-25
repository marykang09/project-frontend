import React from 'react'
import { withRouter } from 'react-router-dom'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { connect } from 'react-redux'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { addingQuote, removingQuote } from '../redux/actions'

class Quote extends React.Component {

    onDoubleClick = event => {
        event.preventDefault()
        if (this.props.currentUser){
            let userQuoteObj = {
                user_id: this.props.currentUser.id,
                quote_id: this.props.quote.id,
            }
                
            if (this.props.userQuotes.find(q => q.quote_id === this.props.quote.id)){
                // console.log("delete this quote from userQuotes")
                let theID = this.props.userQuotes.find(q =>q.quote_id === this.props.quote.id).id
                // console.log("theID", theID)
                this.props.removingQuote(theID)
            } else {
                // console.log("adding this quote to userQuotes")
                this.props.addingQuote(userQuoteObj)
            }


        } else {
            alert("Please sign in to save quotes")
        }
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

        return (
            
            <section id="quote">
                <OverlayTrigger placement="right" delay={{show: 100, hide: 200}} overlay={this.renderToolTip}>
                    <div className="card">
                            <blockquote className="blockquote mb-0 card-body">
                                <p>{this.props.quote.quote}</p>
                                <footer className="blockquote-footer">
                                <small className="text-muted"> {this.props.quote.author} </small>
                                </footer>
                            </blockquote>
                            
                            <div className="icon" onDoubleClick={this.onDoubleClick}> {this.props.userQuotes.find(q => q.quote_id === this.props.quote.id) ? <FcLike/> : <FcLikePlaceholder/>} </div>
                    </div>
                </OverlayTrigger>
            </section>
            
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