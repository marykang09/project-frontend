import React from 'react'
import '../assets/css/modal.scss'
// import '../assets/css/inspire.scss'
import { connect } from 'react-redux'

class QuotesModal extends React.Component{

    constructor(){
        super()
        this.state = {
            animation_name: "",
            depth: "",
            fade: ""
        }
    }
  
    closePopUp = () => {
        this.setState({animation_name: 'animate-out'})
        this.setState({depth:'above'})
        this.setState({fade:'fade-out'})
    }

    openPopUp = () => {
        this.setState({animation_name: 'animate-in'})
        this.setState({depth:'below'})
        this.setState({fade:'fade-in'})
    }

    getRandomQuote = () => {
          return (!this.props.quotes ? null : 
             this.props.quotes[Math.floor(Math.random() * this.props.quotes.length)]
            // return randomQuoteObj.author
            )
    }

    render(){
        // let quotesArray = this.props.quotes
        // let randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)]
        // console.log("in random quote", this.props.quotes)
        // debugger
        // console.log("in random quote", randomQuote.quote)

        return (!this.props.quotes ? null :
            <div>
                <h1> LOOKING FOR INSPIRATION? </h1>
                <br></br>
                <button className="opener" id={this.state.depth} onClick={this.openPopUp}>Click Here</button>
                <section id="pop-up" className={this.state.animation_name}>
                    <div id="innerPopUp" className={this.state.fade}>
                    <div className="border-overlay">
                        <div className="white"></div>
                        <div className="black"></div>
                    </div>
                    <div className="text">
                        <h1>Namaste</h1>
                        <hr/>
                        <p className="close" onClick={this.closePopUp}> X </p>
                            <p> {this.props.quotes.quote} </p>
                                    <p> {`- ${this.props.quotes.author}` }</p>

                        <button>Check it out</button>
                    </div>
                    <div className="photo">
                        <img src="https://static.pexels.com/photos/57905/pexels-photo-57905.jpeg"/>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // let quotesArray = state.quotes
    // let randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)]
    // console.log("in random quote", state.quotes[Math.floor(Math.random() * quotesArray.length)]) 

    return {
        quotes: state.quotes[Math.floor(Math.random() * state.quotes.length)]
    }
}

export default connect(mapStateToProps)(QuotesModal)

