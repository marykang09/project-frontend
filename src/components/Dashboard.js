import React from 'react'
import { connect } from 'react-redux'
import Demo from './Demo'
import yogi3 from '../assets/images/yogi3.png'
import lotus from '../assets/images/lotus.jpg'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import '../assets/css/modal.scss'

class Dashboard extends React.Component {

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
        return (!this.props.currentUser ? null :
            <div>
                <div className="dashboard">
                    <h1 className="header"> NAMASTE, WELCOME BACK </h1>
                    <p className="ptag"><strong> {this.props.currentUser.first_name} </strong></p>

                    <Link to='/sequences'><Button className="mybtn" variant="flat" size="md">Create A New Sequence</Button></Link>
                    <br></br><br></br>
                </div>
                <div className="line"></div>
                <div className="div2">
                    <div className="dashboard-image">
                        <img src={yogi3} style={{width:"40%"}}/>
                    </div>
                </div>

                <div className="side-div">
                    <h1 className="header"> looking for inspiration? </h1>
                    <button className="opener" id={this.state.depth} onClick={this.openPopUp} style={{width:"5%"}}> INSPIRE </button>
                        <section id="pop-up" className={this.state.animation_name}>
                            <div id="innerPopUp" className={this.state.fade}>
                            <div className="border-overlay">
                                <div className="white"></div>
                                <div className="black"></div>
                            </div>
                            <div className="text">
                                <h1 className="header">Namaste</h1>
                                <hr/>
                                <p className="close" onClick={this.closePopUp}> X </p>
                                    <p> {this.props.quotes.quote} </p>
                                            <p> {`- ${this.props.quotes.author}` }</p>

                                <button>Check it out</button>
                            </div>
                            <div className="photo">
                                <img src={lotus} />
                            </div>
                            </div>
                        </section>
                </div>
                        
            </div>
        )
    }
        // {/* <Demo/> */}

    
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        quotes: state.quotes[Math.floor(Math.random() * state.quotes.length)]
    }
}

export default connect(mapStateToProps)(Dashboard)