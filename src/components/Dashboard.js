import React from 'react'
import { connect } from 'react-redux'
import Demo from './Demo'
import yogi3 from '../assets/images/yogi3.png'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


const Dashboard = (props) => {
    return (!props.currentUser ? null :
        <div>
            <div className="dashboard">
                <h1 className="header"> NAMASTE, WELCOME BACK </h1>
                <p className="ptag"><strong> {props.currentUser.first_name} </strong></p>

                <Link to='/sequences'><Button className="mybtn" variant="flat" size="md">Create A New Sequence</Button></Link>
                <br></br><br></br>
            </div>
            <div className="line"></div>
            <div className="div2">
                <div className="dashboard-image">
                    <img src={yogi3} style={{width:"40%"}}/>
                </div>
            </div>
                    
        </div>
    )
        // {/* <Demo/> */}

    
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Dashboard)