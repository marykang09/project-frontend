import React from 'react'
import {Link} from 'react-router-dom'
import yogi4 from '../assets/images/yogi4.jpg'
import Image from './Image'

const HomePage = () => {

    return(
        <div >
            <div className="homepage-img">
                
                <img src={yogi4} style={{width:"70%"}}/>
                
                <div className="homepage-text"> FLOW FIND </div>
                
            </div>
        </div>
    )

    
}

export default HomePage