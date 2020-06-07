import React from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'


const SequencePose = (props) => {
    // console.log("SequencePose's props", props)

    return (!props.pose ? null : 
        //need to do this to account for INIT state = []
        <div>

             <Card border="light" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.pose.pose.img_url} />
                <Card.Body>
                    <Card.Title>{props.pose.pose.english_name}</Card.Title>
                    <Card.Text>{props.pose.pose.sanskrit_name}</Card.Text>
                </Card.Body>
            </Card>
            
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