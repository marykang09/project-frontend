import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import SearchBar from './SearchBar'
import { render } from '@testing-library/react'
import swal from '@sweetalert/with-react'
import '../assets/css/modal.scss'
import '../assets/css/inspire.scss'

class QuotesPage extends React.Component{

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

    onInspireClick = () => {
        
        let quotesArray = this.props.quotes
        let randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)]
        console.log("in random quote", randomQuote)
        
        this.setState({animation_name: 'animate-in'})
        this.setState({depth:'below'})
        this.setState({fade:'fade-in'})

        return (
            <div>
                <section id="pop-up" className={this.state.animation_name}>
                    <div id="innerPopUp" className={this.state.fade}>
                        <div className="border-overlay">
                            <div className="white"></div>
                            <div className="black"></div>
                        </div>
                        <div className="text">
                            <h1>Hey there</h1>
                            <hr/>
                            <p className="close" onClick={this.closePopUp}> X </p>
                            <p>Just checking in, but maybe did you want to sign up for out newsletter? I hear that all the cool kids are doing it. Plus we might giving away from free stuff. Your choice.</p>
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

    render(){
        return (
            <div>

                <h1> LOOKING FOR INSPIRATION? </h1>
                <br></br>
                <div className="line"></div>
                <br></br>
                <button className="inspire" id={this.state.depth} onClick={()=>this.onInspireClick()}> Surprise Me </button>

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