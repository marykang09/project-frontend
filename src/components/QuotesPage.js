import React from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import Quote from './Quote'


const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

class QuotesPage extends React.Component{


    render(){
        return (!this.props.quotes ? null :

            <section id="quotespage">
                <div className="quotes">
                    <h1 className="page-headers"> INSPIRATION </h1>
                    <div className="line"></div>
                    <br></br>
                    <h3> search by keyword or author </h3>
                    <SearchBar/> 
                    <br></br>      
                    <div className="quotes-grid">   
                        {this.props.quotes.length > 0 ? this.props.quotes.map(quote => <Quote key={quote.id} quote={quote}/> ) : <h3> no quotes found... </h3>}
                    </div>   
                </div>
                <i className="fa fa-long-arrow-up fa-lg" id="scroll" onClick={scrollToTop}></i>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        quotes: state.quotes.filter(
                        quote => quote.quote.toLowerCase().includes(state.searchText.toLowerCase()) ||
                                quote.author.toLowerCase().includes(state.searchText.toLowerCase() ) 
                )

    }
}


export default connect(mapStateToProps)(QuotesPage)