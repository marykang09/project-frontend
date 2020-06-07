import React from 'react'
import { Route } from 'react-router-dom'
import SequencesList from './SequencesList'

const MySequencesPage = (props) => {
    console.log("MySequencesPage props:", props)

    return (
        <div>
            <h1>My Sequences</h1>
            
            < SequencesList />

        </div>
    )
}

export default MySequencesPage