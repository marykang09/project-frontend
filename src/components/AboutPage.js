import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {

    return (
        <section id="about-page">
            <div className="first">
                <h1> About </h1>
                <p>
                    Yoga refers to a collective union of physical, mental, and spiritual practices with roots in ancient India. 
                    Practicing yoga along with the physical poses or asanas can help to align and form a strong connection between
                    the mind, body, and spirit. 
                    <br></br>
                    There are many different types of yoga. Whichever style may be the right type for you, Flow Find aims to support your practice
                    by acting as your go-to resource for poses, sequences, and inspiration.
                </p>
            </div>
            <div className="second">
                <h1> Flow </h1>
                <p>
                    Sign up to start creating your own yoga sequence, flow, or class! 
                </p>
            </div>
            <div className="third">
                <h1> Mantra </h1>
                <p>
                    Looking for a little inspiration or mantra? Browse through quotes and save them to your dashboard.
                </p>
            </div>
            <div className="fourth">
                <h1> 
                    get <Link to="/login"> started</Link>!
                </h1>
            </div>
        </section>
        )    
}

export default AboutPage