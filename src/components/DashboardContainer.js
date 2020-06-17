import React from 'react'
import { connect } from 'react-redux'
import UserInspire from './UserInspire'
import UserSequences from './UserSequences'
import UserQuotes from './UserQuotes'

const DashboardContainer = (props) => {
    return (!props.currentUser ? null :
        <div className="padding">
            <div className="welcome"> WELCOME BACK <p className="ptag"><strong> {props.currentUser.first_name} </strong></p> </div>
            <div className="line"></div>
            <div className="dash-container">
                <UserQuotes/>            
                <UserInspire/>
                <UserSequences/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(DashboardContainer)