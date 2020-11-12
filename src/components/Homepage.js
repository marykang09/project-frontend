import React from 'react'
import {Link} from 'react-router-dom'
import yogi4 from '../assets/images/yogi4.jpg'
import Image from './Image'


const HomePage = () => {

    return(
        <section id="homepage">
            <div className="homepage-grid">
                    <img src={yogi4} style={{width:"100%"}}  />
                    <h1 className="home-header"> FLOW FIND </h1>
            </div>
        </section>
    )

    
}

export default HomePage