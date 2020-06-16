import React from 'react'
import { Route } from 'react-router-dom'
import PosesList from './PosesList'
import styled from 'styled-components';
import SearchBar from './SearchBar'


const PosesPage = (props) => {
    console.log("PosesPage props:", props)

    return (
        <div className="pose-page">
          <div className="pose-div">
                <h1> BROWSE ALL POSES </h1>
                <br></br>
                <div className="line"></div>
                <br></br>
                <SearchBar/>
                <br></br>
          </div>
          <PosesList/>
                {/* <Route path="/" component={PosesList} /> */}
        </div>
    )
}

export default PosesPage