import React from 'react'
import {Link} from 'react-router-dom'
import yogi4 from '../assets/images/yogi4.jpg'
import Image from './Image'

const HomePage = () => {

    return(
        <div className="home-page">
            <div className="home-image">
                <img src={yogi4} style={{width:"100%"}}  />
            </div>
            <h1 class="ml12"> FLOW FIND </h1>



        </div>
    )

    
}

export default HomePage