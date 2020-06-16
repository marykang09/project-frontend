import React from 'react'
import {Link} from 'react-router-dom'
import yogiman from '../assets/images/yogiman.jpeg'
import Image from './Image'

const HomePage = () => {

    return(
        <div className="home-page">
            <div className="home-text"> FLOW FIND </div>
            <div className="home-image">
                <img src={yogiman} style={{width:"60%"}}  />
            </div>
            {/* <Image/> */}
            {/* <img src={yogiman}/> */}
            {/* <div className="bg"></div> */}

        </div>
    )

    
}

export default HomePage