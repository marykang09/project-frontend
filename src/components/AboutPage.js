import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {

    return (
        <section id="about-page">

                <h1> Use this app to browse poses, find inspiration, and create your own yoga sequences </h1>
                <h2>
                    Info about vinyasa yoga
                </h2>
                <br></br>

                <h1>
                    Get Started!
                    <br></br>
                    <Link to="/login"> Log In </Link>
                    <br></br> 
                    OR
                    <br></br> 
                    <Link to="/signup"> Sign Up</Link>
                </h1>
        </section>
        )    
}

export default AboutPage