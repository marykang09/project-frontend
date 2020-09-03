import React from 'react'
import styled from 'styled-components';
import headerphoto from '../assets/images/twitter_header_photo_1 copy.png'
import { Link } from 'react-router-dom'
import Homepage from './Homepage'

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: #987D7C;
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
                <Title> Use this app to browse poses, find inspiration, and create your own yoga sequences </Title>
                <br></br>
                <br></br>
                <h1> 
                    <Link to="/login"> Log In </Link>
                    <br></br> 
                    OR
                    <br></br> 
                    <Link to="/signup"> Sign Up</Link>
                </h1>
        </div>
        </div>
        )


           

    
}

export default AboutPage