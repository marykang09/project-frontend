import React from 'react'
import { Route } from 'react-router-dom'
import PosesList from './PosesList'
import styled from 'styled-components';
import headerphoto from './images/twitter_header_photo_1 copy.png'


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
            <Wrapper>
                <Title> BROWSE ALL POSES </Title>

            </Wrapper>
                <Route path="/" component={PosesList} />
        </div>
    )
}

export default PosesPage