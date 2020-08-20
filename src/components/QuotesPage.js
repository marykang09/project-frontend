import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import SearchBar from './SearchBar'
import { render } from '@testing-library/react'
import Quote from './Quote'
import { Row, Col, Carousel, CarouselItem, CardDeck } from 'react-bootstrap'

class QuotesPage extends React.Component{


    render(){
        return (!this.props.quotes ? null :

            <div className="padding">
                <div className="quotes">
                    <h1 className="page-headers"> INSPIRATION </h1>
                        <div className="line"></div>
                    <br></br>
                        <SearchBar/> 
                        <br></br>                     
                        {this.props.quotes.map(quote => <Quote key={quote.id} quote={quote}/> )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        quotes: state.quotes.filter(
                        quote => quote.quote.toLowerCase().includes(state.searchText.toLowerCase()) ||
                                quote.author.toLowerCase().includes(state.searchText.toLowerCase() ) 
                )

    }
}


export default connect(mapStateToProps)(QuotesPage)