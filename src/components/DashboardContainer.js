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
                        <h3> My Saved Quotes </h3>
                        <div className="user-quotes-grid">
                            {this.props.user_quotes.map(quote => <Quote key={quote.id} quote={quote.quote}/> )}
                        </div>
                        {this.props.user_quotes.length === 0 ? <h3> No quotes yet :( Find some <Link to="/quotes"> Here! </Link> </h3> : null}
                    </div>
                    <div className="user">
                        <h3> My Affirmation </h3>
                        <p> {this.state.affirmation} </p>
                        <button className="add" onClick={()=> this.getRandomAffirmation()}> Receive Another </button>
                        <img src={yogiman} />
                        
                    </div>
                    <div className="user-sequences">
                        <h3> My Saved Sequences </h3>
                        <div className="user-sequences-grid">
                            {this.props.sequences.length === 0 ? <h3> No sequences yet :( Get started <Link to="/sequences"> Here! </Link> </h3> : this.props.sequences.map(sequence => ( <Sequence key={sequence.id} sequence={sequence} /> )) }
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