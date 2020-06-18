import React from 'react'
import Demo from './Demo'
import styled from 'styled-components';
import headerphoto from '../assets/images/twitter_header_photo_1 copy.png'
import { Link } from 'react-router-dom'
import Homepage from './Homepage'

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #987D7C;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: white;
`;


const AboutPage = () => {
    return (
        <div>
        <div className="about-page">
            {/* <img 
                src={headerphoto} 
                style={{width:"100%"}}
                padding="0" /> */}
                <br></br>
                <br></br>
            <Wrapper>
            {/* <Demo/> */}
                <Title> Use this app to browse poses and create your own sequences </Title>
                <h1> 
                    <Link to="/login"> Log In </Link>
                    <br></br>
                    <Link to="/signup"> Sign Up</Link>
                </h1>
            </Wrapper>
        </div>
        </div>
        )


           

    
}

export default AboutPage