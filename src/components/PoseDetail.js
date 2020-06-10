import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


const PoseDetail = (props) => {

    return (!props.pose ? null : 
    //need to do this to account for INIT state = []
        <div>
            <h1> POSE DETAILS </h1>
            <br></br>
            <h3>NAME: {props.pose.english_name}</h3>
            <p>
                SANSKRIT NAME: {props.pose.sanskrit_name}
                <br>
                </br>
                <br>
                </br>
                <img 
                    src={props.pose.img_url}
                    width={400}
                    height={400}
                    mode="fit"
                    ></img>
            </p>
            
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {

    let poseId = parseInt(ownProps.match.params.id)
    //have to parseInt because the params id is a string

    return {
        pose: state.poses.find(pose => pose.id === poseId)
    }
}

export default withRouter(connect(mapStateToProps)(PoseDetail))
// export default PoseDetail
