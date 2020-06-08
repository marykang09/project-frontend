import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import SequencesList from './SequencesList'
import { connect } from 'react-redux'

const MySequencesPage = (props) => {
    console.log("MySequencesPage props:", props)

    return (
        <div>
            <h1>My Sequences</h1>
            <br></br>
            {props.sequences.length === 0 ? <h2>You don't have any sequences yet!</h2> : < SequencesList /> }
            
            
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        sequences: state.sequences
    }
}

export default withRouter(connect(mapStateToProps)(MySequencesPage))