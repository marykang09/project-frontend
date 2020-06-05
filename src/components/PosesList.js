import React from 'react'
import Pose from './Pose'
import { connect } from 'react-redux'

const PosesList = (props) => {
    console.log("PosesList props:", props)

    return (
        <div>
            <h3>this is the PosesList</h3>
            {props.poses.map(pose => (
                <Pose
                    key={pose.id}
                    pose={pose} />
            ))}
    
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // poses: state.poses  //this would never re-render when searched
        poses: state.poses.filter(
            pose => 
                pose.english_name.toLowerCase().includes(state.searchText.toLowerCase()) ||
                pose.sanskrit_name.toLowerCase().includes(state.searchText.toLowerCase())
        )
    }
}

export default connect(mapStateToProps)(PosesList)