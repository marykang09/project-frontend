import React from 'react'
import RadioButtonsCategory from './RadioButtonsCategory'
import RadioButtonsAction from './RadioButtonsAction'
import RadioButtonsDifficulty from './RadioButtonsDifficulty.js'
import Pose from './Pose'
import { connect } from 'react-redux'
import { Col, Row} from 'react-bootstrap'

import PoseList from './PosesList'

class RadioButtonsAll extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="radiobuttontop">
                <div className="radiobuttons">
                    <RadioButtonsCategory/>
                    <RadioButtonsAction/>
                    <RadioButtonsDifficulty/>
                </div>

                {/* <PoseList/> */}
                <div className="pose-list">
                <br></br>
                <Row>
                    <Col xs lg="2"></Col>
                    {this.props.poses.map(pose => (
                        <Pose
                            classname="card-pose"
                            key={pose.id}
                            pose={pose}
                            editing={false}
                            sequence={""} />
                    ))}
                </Row>
                </div>
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
        poses: state.poses.filter(
            pose => 
                pose.english_name.toLowerCase().includes(state.searchText.toLowerCase()) ||
                pose.sanskrit_name.toLowerCase().includes(state.searchText.toLowerCase())
        )
    }
}

export default connect(mapStateToProps)(RadioButtonsAll)