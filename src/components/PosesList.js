import React from 'react'
import Pose from './Pose'
import { connect } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const PosesList = (props) => {
    console.log("PosesList props:", props)

    return (
        <div>
            <Container>
            
                <Row className="justify-content-md-center">
                <Col md="auto"></Col>
            {props.poses.map(pose => (
                <Pose
                    key={pose.id}
                    pose={pose}
                    editing={false} />
            ))}
                </Row>
           
            </Container>
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