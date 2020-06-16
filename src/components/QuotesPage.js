import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import SearchBar from './SearchBar'
import { render } from '@testing-library/react'
import Quote from './Quote'
import { Row, Col, Carousel, CarouselItem, CardDeck } from 'react-bootstrap'

class QuotesPage extends React.Component{



    render(){
        return (
            <div>

                <div className="quotes">
                <div className="line"></div>
                    <h1 className="header"> QUOTES </h1>
                    <br></br>                      
                        {this.props.quotes.map(quote => <Quote key={quote.id} quote={quote}/> )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        quotes: state.quotes
    }
}


export default connect(mapStateToProps)(QuotesPage)