import React from 'react'
import Clock from 'react-live-clock';
import plant from '../assets/images/fancy-plants.png'
import plant2 from '../assets/images/fancy-plants2.png'
import yogiman from '../assets/images/yogiman.jpeg'
import '../assets/css/modal.scss'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { FaRegLightbulb } from "react-icons/fa";


class UserInspire extends React.Component {

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
        return (!this.props.currentUser || !this.props.quotes ? null :
            <div className="userinspire">
                <h1 className="header"> TIME </h1><br/>
                    <Clock format={'HH:mm'} ticking={true} timezone={'America/New_York'} />
                    <br></br>
                    <img src={yogiman} style={{width:"85%"}}/>
                    <br></br><br></br>
                <h1 className="header"> looking for inspiration? </h1>
                    <button className="opener" id={this.state.depth} onClick={this.openPopUp} style={{width:"5%"}}> + </button>
                        <section id="pop-up" className={this.state.animation_name}>
                            <div id="innerPopUp" className={this.state.fade}>
                            <div className="border-overlay">
                                <div className="white"></div>
                                <div className="black"></div>
                            </div>
                            <div className="text">
                                <h1 className="header">Namaste</h1>
                                <hr/>
                                <br></br>
                                <p className="close" onClick={this.closePopUp}> &nbsp; X </p>
                                    <p> {this.props.quotes.quote} </p>
                                            <p> {`- ${this.props.quotes.author}` }</p>

                                <button className="mybtn">Check it out</button>
                            </div>
                            <br></br>
                            <div className="photo">
                                <img src={plant2} />
                            </div>
                            </div>
                        </section>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        quotes: state.quotes[Math.floor(Math.random() * state.quotes.length)]
    }
}

export default withRouter(connect(mapStateToProps)(UserInspire))