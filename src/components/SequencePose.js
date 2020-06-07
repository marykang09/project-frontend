import React from 'react'
import { connect } from 'react-redux'

import Image from 'react-bootstrap/Image'


const SequencePose = (props) => {
    // console.log("SequencePose's props", props)

    return (!props.pose ? null : 
        //need to do this to account for INIT state = []
        <div>
            <Image 
                src={props.pose.pose.img_url} 
                width={171}
                height={180}
                mode="fit"
                roundedCircle />
            <h2> {props.pose.pose.english_name} </h2>

            

        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log("ownProps:", ownProps )

    return {
        // poses: state.poses.find(
        //     pose => pose.id === parseInt(ownProps.sp.pose_id)
        // )
    }
}

export default connect(mapStateToProps)(SequencePose)