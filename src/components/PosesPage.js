import React from 'react'
import { Route } from 'react-router-dom'
import PosesList from './PosesList'
import styled from 'styled-components';
import SearchBar from './SearchBar'

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 2.0em;
  text-align: center;
  color: white;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: #a3b9c9;
`;


const PosesPage = (props) => {
    console.log("PosesPage props:", props)

    return (
        <div>
          <div className="pose-div">
                <h1> BROWSE ALL POSES </h1>
                <br></br>
                <div className="line"></div>
                 <br></br>
                <SearchBar/>
          </div>
                <Route path="/" component={PosesList} />
        </div>
    )
}

export default PosesPage