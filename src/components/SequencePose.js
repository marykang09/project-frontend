import React from 'react'
import { connect } from 'react-redux'

const SequencePose = (props) => {
    console.log("props", props)
    console.log("props.sp", props.sp)
    console.log("props.sp.poseid", parseInt(props.sp.pose_id))

    return (!props.sp ? null : 
        //need to do this to account for INIT state = []
        <div>
            <h1>this is the SequencePose</h1>

            <h2> {props.pose.english_name} </h2>


            

        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log("ownProps:", ownProps )
    return {
        pose: state.poses.find(
            pose => pose.id === parseInt(ownProps.sp.pose_id)
        )
    }
}

export default connect(mapStateToProps)(SequencePose)