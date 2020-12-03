import React from 'react'
import { connect } from 'react-redux'
import Quote from './Quote'
import yogiman from '../assets/images/yogiman.jpeg'
import Sequence from './Sequence'
import { Link } from 'react-router-dom'
import affirmations from './Affirmations'

class DashboardContainer extends React.Component {
    constructor(){
        super()
        this.state ={
            affirmation: ""
        }
    }

    componentDidMount(){
        let firstAffirmation =  affirmations[Math.floor(Math.random() * affirmations.length)]
        this.setState({
            affirmation: firstAffirmation
        })
    }

    getRandomAffirmation = () => { 
        let randomAffirmation =  affirmations[Math.floor(Math.random() * affirmations.length)]
        this.setState({
            affirmation: randomAffirmation
        })
    }

    render(){
        return (!this.props ? null :
            <section id="dashboard">
                <h1 className="page-headers"> WELCOME BACK  </h1>
                <p className="ptag"><strong> {this.props.currentUser.first_name} </strong></p>
                <div className="line"></div>
                <br></br>

                <div className="dash-container">
                    <div className="user-quotes">
                        <h3 className="dash-title"> My Saved Quotes </h3><br></br>
                        <div className="dash-outer">
                            <div className="user-quotes-grid">
                                    {this.props.user_quotes.length === 0 ? <p> no quotes yet :( find some <Link to="/quotes"> here! </Link> </p> : this.props.user_quotes.map(quote => <Quote key={quote.id} quote={quote.quote}/> )}
                            </div>
                        </div>
                    </div>

                    <div className="user">
                        <h3 className="dash-title"> My Affirmation </h3><br></br>
                        <div className="quote-area">
                            <p> {this.state.affirmation} </p>
                        </div>
                        <button className="affirm" onClick={()=> this.getRandomAffirmation()}> receive another </button>
                        <img src={yogiman} alt="yogi"/>
                    </div>

                    <div className="user-sequences">
                        <h3 className="dash-title"> My Saved Sequences </h3><br></br>
                        <div className="dash-outer">
                            <div className="user-sequences-grid">
                                {this.props.sequences.length === 0 ? <p> no sequences yet :( get started <Link to="/sequences"> here! </Link> </p> : this.props.sequences.map(sequence => ( <Sequence key={sequence.id} sequence={sequence} /> )) }
                            </div>
                        </div>
                    </div>

                </div>



            </section>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        user_quotes: state.userQuotes,
        sequences: state.sequences
    }
}

export default connect(mapStateToProps)(DashboardContainer)