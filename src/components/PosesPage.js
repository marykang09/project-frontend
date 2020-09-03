import React from 'react'
import { Route } from 'react-router-dom'
import SearchBar from './SearchBar'
import RadioButtonsAll from './RadioButtonsAll'

const PosesPage = (props) => {
    console.log("PosesPage props:", props)

    return (
        <div className="pose-page">
          <div className="pose-div">
                <div className="poseheader">
                    <h1 className="page-headers"> BROWSE
                     POSES </h1>
                    <br></br>
                    <div className="line"></div>
                    <br></br>
                    <SearchBar/>
                </div>
                <RadioButtonsAll/>
                <br></br>
          </div>
        </div>
    )
}


export default PosesPage