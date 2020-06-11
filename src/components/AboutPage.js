import React from 'react'
import Demo from './Demo'
import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 4em;
  background: #987D7C;
`;


const AboutPage = () => {
    return (
    <div>
        <Wrapper>
            <Title>Use this app to browse yoga poses, and create your own sequences! Namaste</Title>
        </Wrapper>
            {/* <Demo/> */}
     </div>
    )
}

export default AboutPage