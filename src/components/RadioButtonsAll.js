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
            this.setState({ 
                category: "",
                categoryAllOn: true})
        } else {
        this.setState({ 
            category: update,
            categoryAllOn: false
            })
        }

        let allPoses = this.props.poses
        let updatedPoses

        if (this.state.categoryAllOn === true){
            console.log("are we hitting this first?")
            if (this.state.actionAllOn === true && this.state.difficultyAllOn === true){
                this.setState({filteredPoses: allPoses})
            } else if (this.state.actionAllOn === false && this.state.difficultyAllOn === true){
                updatedPoses = allPoses.filter(p => p.action === this.state.action)
                this.setState({ filteredPoses: updatedPoses})
            } else if (this.state.actionAllOn === true && this.state.difficultyAllOn === false){
                updatedPoses = allPoses.filter(p => p.difficulty === this.state.difficulty)
                this.setState({ filteredPoses: updatedPoses})
            } else { // if no category filter, but action and difficulty filters
                updatedPoses = allPoses.filter(p => p.action === this.state.action && p.difficulty === this.state.difficulty)
                this.setState({ filteredPoses: updatedPoses})
            }
        } else if (this.state.categoryAllOn === false){ // if this.state.categoryAllOn is false and there is a filter
            console.log("are we hitting this too?")
            if (this.state.actionAllOn === true && this.state.difficultyAllOn === true){
                updatedPoses = allPoses.filter(p => p.category === update)
                console.log(updatedPoses)
                this.setState({ filteredPoses: updatedPoses})
            } else if (this.state.actionAllOn === false && this.state.difficultyAllOn === true){
                updatedPoses = allPoses.filter(p => p.category === update && p.action === this.state.action)
                this.setState({ filteredPoses: updatedPoses})
            } else if (this.state.actionAllOn === true && this.state.difficultyAllOn === false){
                updatedPoses = allPoses.filter(p => p.category === update && p.difficulty === this.state.difficulty)
                this.setState({ filteredPoses: updatedPoses})
            } else { // if filters for everything
                updatedPoses = allPoses.filter(p => p.category === this.state.category && p.action === this.state.action && p.difficulty === this.state.difficulty)
                this.setState({ filteredPoses: updatedPoses})
            } 
        } 

    }

    updateAction = (update) => {
        console.log("made it up to parents, what is update?", update)

        if (update === "All Actions"){
            this.setState({ 
                action: "",
                actionAllOn: true})
        } else {
        this.setState({ 
            action: update,
            actionAllOn: false})
        }

        let allPoses = this.props.poses
        let updatedPoses

        if (this.state.actionAllOn === true){
            if (this.state.categoryAllOn === true && this.state.difficultyAllOn === true){
                this.setState({filteredPoses: []})
            } else if (this.state.categoryAllOn === false && this.state.difficultyAllOn === true){
                updatedPoses = allPoses.filter(p => p.category === this.state.category)
                this.setState({ filteredPoses: updatedPoses})
            } else if (this.state.categoryAllOn === true && this.state.difficultyAllOn === false){
                updatedPoses = allPoses.filter(p => p.difficulty === this.state.difficulty)
                this.setState({ filteredPoses: updatedPoses})
            } else { 
                updatedPoses = allPoses.filter(p => p.category === this.state.category && p.difficulty === this.state.difficulty)
                this.setState({ filteredPoses: updatedPoses})
            }
        } else if (this.state.actionAllOn === false){ // if this.state.actionAllOn is false and there is a filter
            if (this.state.categoryAllOn === true && this.state.difficultyAllOn === true){
                updatedPoses = allPoses.filter(p => p.action === update)
                this.setState({ filteredPoses: updatedPoses})
            } else if (this.state.categoryAllOn === false && this.state.difficultyAllOn === true){
                updatedPoses = allPoses.filter(p => p.action === update && p.category === this.state.category)
                this.setState({ filteredPoses: updatedPoses})
            } else if (this.state.categoryAllOn === true && this.state.difficultyAllOn === false){
                updatedPoses = allPoses.filter(p => p.action === update && p.difficulty === this.state.difficulty)
                this.setState({ filteredPoses: updatedPoses})
            } else { // if filters for everything
                updatedPoses = allPoses.filter(p => p.category === this.state.category && p.action === this.state.action && p.difficulty === this.state.difficulty)
                this.setState({ filteredPoses: updatedPoses})
            } 
        }
    }

    updateDifficulty = (update) => {
        console.log("made it up to parents, what is udpate?", update)

        if (update === "All Difficulties"){
            this.setState({ 
                difficulty: "",
                difficultyAllOn: true})
        } else {
        this.setState({ 
                difficulty: update,
                difficultyAllOn: false
            })
        }

        let allPoses = this.props.poses
        let updatedPoses

        if (this.state.difficultyAllOn === true){
            if (this.state.categoryAllOn === true && this.state.actionAllOn === true){
                this.setState({filteredPoses: []})
            } else if (this.state.categoryAllOn === false && this.state.actionAllOn === true){
                updatedPoses = allPoses.filter(p => p.category === this.state.category)
                this.setState({ filteredPoses: updatedPoses})
            } else if (this.state.categoryAllOn === true && this.state.actionAllOn === false){
                updatedPoses = allPoses.filter(p => p.action === this.state.action)
                this.setState({ filteredPoses: updatedPoses})
            } else { 
                updatedPoses = allPoses.filter(p => p.category === this.state.category && p.action === this.state.action)
                this.setState({ filteredPoses: updatedPoses})
            }
        } else if (this.state.difficultyAllOn === false){ // if this.state.actionAllOn is false and there is a filter
            if (this.state.categoryAllOn === true && this.state.actionAllOn === true){
                updatedPoses = allPoses.filter(p => p.difficulty === update)
                this.setState({ filteredPoses: updatedPoses})
            } else if (this.state.categoryAllOn === false && this.state.actionAllOn === true){
                updatedPoses = allPoses.filter(p => p.difficulty === update && p.category === this.state.category)
                this.setState({ filteredPoses: updatedPoses})
            } else if (this.state.categoryAllOn === true && this.state.actionAllOn === false){
                updatedPoses = allPoses.filter(p => p.difficulty === update && p.action === this.state.action)
                this.setState({ filteredPoses: updatedPoses})
            } else { // if filters for everything
                updatedPoses = allPoses.filter(p => p.category === this.state.category && p.action === this.state.action && p.difficulty === this.state.difficulty)
                this.setState({ filteredPoses: updatedPoses})
            } 
        }
        // let allPoses = this.props.poses
        // let updatedPoses

        // updatedPoses = allPoses.filter(p => p.difficulty === update)
        
        // if (this.state.categoryAllOn === false || this.state.actionAllOn === false){
        //     let keepFilteredPoses
        //     keepFilteredPoses = this.state.filteredPoses.filter(p => p.difficulty === update)
        //     this.setState({ filteredPoses: keepFilteredPoses})
        // } else {
        // this.setState({ filteredPoses: updatedPoses })
        // }
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

                        {searchFilteredPoses.length > 0 ? searchFilteredPoses.map(pose => (
                            <Pose
                                classname="card-pose"
                                key={pose.id}
                                pose={pose}
                                editing={false}
                                sequence={""} />
                        )) : "No poses found; Please try a different search"}
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