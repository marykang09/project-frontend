import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


const PoseDetail = (props) => {

    return (!props.pose ? null : 
    //need to do this to account for INIT state = []
        <section id="pose-detail">
            <h1 className="page-headers"> POSE DETAILS </h1>
            <br></br>
            <div className="line"></div>
            <br></br>
            <div className="pose-detail-grid">
                <div className="pose-detail-grid-img">
                    <img 
                        src={props.pose.img_url}
                        width={400}
                        height={400}
                        mode="fit"
                    ></img>
                </div>
                <div className="pose-detail-grid-info">
                    <h3>
                        Name <br></br><span> {props.pose.english_name} </span>
                        <br></br>
                        <br></br>
                        Sanksrit Name <br></br><span> {props.pose.sanskrit_name} </span>
                        <br></br>
                        <br></br>
                        Category <br></br><span> {props.pose.category} </span>
                        <br></br>
                        <br></br>
                        Action <br></br><span> {props.pose.action} </span>
                        <br></br>
                        <br></br>
                        Difficulty <br></br><span> {props.pose.difficulty} </span>
                    </h3>
                </div>
            </div>
        </section>
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
