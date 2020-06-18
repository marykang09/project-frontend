import React from 'react'
import {Link} from 'react-router-dom'
import yogi4 from '../assets/images/yogi4.jpg'
import Image from './Image'


const HomePage = () => {

    return(
        <div>
            <div className="home-page">
                <div className="home-image">
                    <img src={yogi4} style={{width:"100%"}}  />
                <h1 class="home-header"> FLOW FIND </h1>
                <h2 class="subheader"> yoga poses, sequences, inspiration </h2>
                </div>
            </div>
        </div>
    )

    
}

export default HomePage