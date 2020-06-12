import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HomePage extends React.Component {

    render(){
        return(
            <div className="Homepage">
                <div>
                    <img src="https://www.dropbox.com/s/3h2pts6xbn28dh7/butterfly%3F.svg?raw=1" width="60%" />
                </div>

                <div>
                    <br></br>
                    <h1> FlowFind </h1>
                    <p>
                        Discover your next yoga flow
                    </p>
                </div>
            </div>

        )
    }
}

export default HomePage