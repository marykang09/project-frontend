import React from 'react'
import { withRouter } from 'react-router-dom'
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
                        alt={props.pose.english_name}
                        width={400}
                        height={400}
                        mode="fit"
                    ></img>
                </div>
                <div className="pose-detail-grid-info">
                    <h3>
                        name <br></br><span> {props.pose.english_name} </span>
                        <br></br>
                        <br></br>
                        sanksrit name <br></br><span> {props.pose.sanskrit_name} </span>
                        <br></br>
                        <br></br>
                        category <br></br><span> {props.pose.category} </span>
                        <br></br>
                        <br></br>
                        action <br></br><span> {props.pose.action} </span>
                        <br></br>
                        <br></br>
                        difficulty <br></br><span> {props.pose.difficulty} </span>
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
