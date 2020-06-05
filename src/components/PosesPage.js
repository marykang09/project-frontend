import React from 'react'
import { Route } from 'react-router-dom'
import PosesList from './PosesList'

const PosesPage = (props) => {
    console.log("PosesPage props:", props)

    return (
        <div>
            <h1>Browse Poses</h1>

                <Route path="/" component={PosesList} />

        </div>
    )
}

export default PosesPage