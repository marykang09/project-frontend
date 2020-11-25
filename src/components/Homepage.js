import React from 'react'
import yogi4 from '../assets/images/yogi4.jpg'
import yogi3 from '../assets/images/yogi3.png'
import lotus from '../assets/images/fancy-plants2.png'
import { NavLink } from 'react-router-dom'
import cactus from '../assets/images/fancy-plants.png'


const HomePage = () => {

    return(
        <section id="homepage">
            <div className="homepage-grid">
                <img src={yogi4} alt="yogi" style={{width:"100%"}}  />
                <h1 className="header-title"> flow find </h1>
            </div>
            <div className="second-grid">
                <div>
                    <h1 className="header-title"> learn </h1>
                    <p className="header-text"> explore yoga poses to learn their sanskrit name and more...</p>
                    <br></br>
                    <NavLink exact to="/poses"><button className="myButton"> start learning </button></NavLink>
                </div>
                <img src={lotus} alt="lotus" style={{width:"100%"}}/>
            </div>
            <div className="third-grid">
                <img src={yogi3} alt="yogi" style={{width:"100%"}}/>
                <div>
                    <h1 className="header-title"> find inspiration </h1>
                    <p className="header-text"> get inspired or find a mantra </p>
                    <br></br>
                    <NavLink exact to="/quotes"><button className="myButton"> browse </button></NavLink>
                </div>
            </div>
            <div className="fourth-area">
                <div className="banner">
                    <h1 className="header-title"> create your own sequences </h1>
                    <p className="header-text"> create, edit, and save custom flows </p>
                    <br></br>
                    <NavLink exact to="/sequences"><button className="myButton"> sign in to get started </button></NavLink><br></br>
                </div>
                <br></br>
                <img src={cactus} alt="cactus"/>
            </div>
        </section>
    )

    
}

export default HomePage