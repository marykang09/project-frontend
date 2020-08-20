import React from 'react'
import RadioButtonsCategory from './RadioButtonsCategory'
import RadioButtonsAction from './RadioButtonsAction'
import RadioButtonsDifficulty from './RadioButtonsDifficulty.js'
import Pose from './Pose'
import { connect } from 'react-redux'
import { Col, Row} from 'react-bootstrap'

class RadioButtonsAll extends React.Component {
    constructor(){
        super()
        this.state = {
            categoryAllOn: true,
            category: "",
            actionAllOn: true,
            action: "",
            difficultyAllOn: true,
            difficulty: "",
            filteredPoses: []
        }
    }

    updateCategory = (update) => {
        console.log("made it up to parents, what is udpate?", update)
        
        if (update === "All Categories"){
            this.setState({ categoryAllOn: true})
        } else {
        this.setState({ category: update})
        }

        let allPoses = this.props.poses
        let updatedPoses

        updatedPoses = allPoses.filter(p => p.category === update)
        this.setState({ filteredPoses: updatedPoses })

        // if (update === "All Categories"){
        //     allPoses.filter(p => p.action === this.state.action && p.difficulty === this.state.difficulty)
        //     this.setState({ filteredPoses: updatedPoses})
        // } else {
        //     allPoses.filter(p => p.category === update)
        //     this.setState({ filteredPoses: updatedPoses})
        // }
    }

    updateAction = (update) => {
        console.log("made it up to parents, what is update?", update)

        if (update === "All Actions"){
            this.setState({ actionAllOn: true})
        } else {
        this.setState({ action: update})
        }

        let allPoses = this.props.poses
        let updatedPoses

        updatedPoses = allPoses.filter(p => p.action === update)
        this.setState({ filteredPoses: updatedPoses})
    }

    updateDifficulty = (update) => {
        console.log("made it up to parents, what is udpate?", update)

        if (update === "All Difficulties"){
            this.setState({ difficultyAllOn: true})
        } else {
        this.setState({ difficulty: update})
        }

        let allPoses = this.props.poses
        let updatedPoses

        updatedPoses = allPoses.filter(p => p.difficulty === update)
        this.setState({ filteredPoses: updatedPoses})
    }


    render(){
        let showFilteredPoses = this.state.filteredPoses.length > 0 ? this.state.filteredPoses : this.props.poses
        let searchFilteredPoses = showFilteredPoses.filter( pose => 
                                                                pose.english_name.toLowerCase().includes(this.props.searchText.toLowerCase()) ||
                                                                pose.sanskrit_name.toLowerCase().includes(this.props.searchText.toLowerCase()))


        return(
            <div className="radiobuttontop">
                <div className="radiobuttons">
                    <RadioButtonsCategory 
                            updateChange={this.updateCategory}/>

                    <RadioButtonsAction
                        updateChange={this.updateAction}/>

                    <RadioButtonsDifficulty
                        updateChange={this.updateDifficulty}/>
                </div>

                {/* <PoseList/> */}
                <div className="pose-list">
                <br></br>
                <Row>
                    <Col xs lg="2"></Col>

                    {searchFilteredPoses.map(pose => (
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
        searchText: state.searchText,
        poses: state.poses.filter(
            pose => 
                pose.english_name.toLowerCase().includes(state.searchText.toLowerCase()) ||
                pose.sanskrit_name.toLowerCase().includes(state.searchText.toLowerCase())
        )
    }
}

export default connect(mapStateToProps)(RadioButtonsAll)