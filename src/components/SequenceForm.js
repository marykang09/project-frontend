import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {Col, Container, Row, Button} from 'react-bootstrap'
import SequencePose from './SequencePose'
import Pose from './Pose'
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move' 
import { orderSequencePoseList, onSaveNewOrder } from '../redux/actions'
import styled from 'styled-components'; 
import SearchBar from './SearchBar'
import swal from 'sweetalert'


//*//*//*//*//*//*//*//*// sort  //*//*//*//*//*//*//*//*// 

let SortableItem = SortableElement(({pose, sequence}) => {

    return (
        <li className="sortable-li" style={{listStyleType: "none"}}>
            <SequencePose className="sortable-seqpose" pose={pose} sequence={sequence} editing={true}/>
        </li>
    )
})

let SortableList = SortableContainer(({poses, sequence}) => {
    return (
        <ul className="row" style={{listStyleType: "none"}}>
            {poses.map((pose, index) => (
            <SortableItem key={`pose-${pose.id}`} index={index} pose={pose} sequence={sequence} />
            ))}
        </ul>
        )
    })

class SortableComponent extends React.Component {
    
    render() {
    console.log("in SortableComponent, this.props:" ,this.props)

    return <SortableList poses={this.props.poses} sequence={this.props.sequence} onSortEnd={this.props.onSortEnd} axis="xy"/>;
    }
}

//*//*//*//*//*//*//*//*// sort //*//*//*//*//*//*//*//*// 



class SequenceForm extends React.Component {
constructor() {
    super()
    this.state = {

    }
}

componentDidMount(){
    return(
        swal({
            text: "Add or remove poses, then drag them into order",
            value: true,
            visible: true,
            className: "swal",
            closeModal: true,
            button: "Got it!"
        })
    )
}

onSave = () => {
    this.props.onSaveNewOrder(this.props.sequence)

    return(
        swal({
            text: "Your sequence has been saved!",
            value: true,
            visible: true,
            className: "swal",
            closeModal: true,
            button: "OK"
        })
    )
}

sortedPoses = () => {
    return(!this.props.sequence ? null : 
    this.props.sequence.sequence_poses.sort((a, b) => (a.position_num  > b.position_num) ? 1: -1)
//list.sort((a, b) => (a.color > b.color) ? 1 : -1)
    )
} 
// this is to sort, if i need to sort by the position number attribute, use in place of this sequences poses when mapping to render <SequencePose> below

render(){
console.log("SequenceForm's props", this.props)

return (!this.props.sequence ? null : 

        <section id="sequence-form">
            <h1 className="page-headers"> {this.props.sequence.name} </h1>
            <p className="ptag"> created by <strong> {this.props.currentUser.first_name} </strong> </p>
            <div className="line"></div>
            <br></br>

            <div className="top-grid">
                <div className="seq-form-poses">
                    <h3><strong> Poses in Sequence </strong></h3>
                    <p> Drag and drop poses into your desired order, or Remove Poses </p>
                    <div className="seq-form-grid-poses">
                        <SortableComponent poses={this.props.sequence.sequence_poses} sequence={this.props.sequence} onSortEnd={(args)=>{this.props.orderSequencePoseList(args, this.props.sequence.id)}} />
                    </div>
                    {this.props.sequence.sequence_poses.length === 0 ? <div className="message"><h3><strong> - No poses yet, add some below! - </strong></h3></div> : null }
                </div>

                <div className="seq-form-grid-action">
                    <div className="grid-info">
                        <div className="grid-info-header">
                            <h3><strong> Pose Count </strong><br></br><span> {this.props.sequence.sequence_poses.length} </span></h3>
                            <h3><strong> Save </strong><br></br><button className="save" onClick={this.onSave}> ✓ </button></h3>
                        </div>

                        <div className="grid-info-stats">
                            <div className="difficulty">
                                <h3><em><strong> Difficulty </strong></em></h3>
                                <h3> Beginner <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.difficulty === "beginner").length} </span></h3>
                                <h3> Intermediate <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.difficulty === "intermediate").length} </span></h3>
                                <h3> Advanced <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.difficulty === "advanced").length}  </span></h3>
                            </div>
                            <div className="category">
                                <h3><em><strong> Category </strong></em></h3>
                                <h3> Standing <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.category === "standing").length} </span></h3>
                                <h3> Seated <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.category === "seated").length} </span></h3>
                                <h3> Supine <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.category === "supine").length}  </span></h3>
                                <h3> Prone <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.category === "prone").length}  </span></h3>
                                <h3> Arm & Leg Support <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.category === "arm and leg support").length}  </span></h3>
                                <h3> Arm Balance & Inversion <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.category === "arm balance and inversion").length}  </span></h3>
                            </div>
                            <div className="action">
                                <h3><em><strong> Action </strong></em></h3>
                                <h3> Back Bend <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.action === "back bend").length} </span></h3>
                                <h3> Forward Bend <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.action === "forward bend").length} </span></h3>
                                <h3> Lateral Bend <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.action === "lateral bend").length}  </span></h3>
                                <h3> Twist <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.action === "twist").length}  </span></h3>
                                <h3> Balance <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.action === "balance").length}  </span></h3>
                                <h3> Neutral <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.action === "neutral").length}  </span></h3>
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid-notes">
                        <h3> Notes <br></br><span> {this.props.sequence.notes.length > 0 ? this.props.sequence.notes : "N/A"} </span></h3>
                    </div>
                    
                </div>

            </div>

            <div className="line"></div>
            <div className="seq-form-all-poses">
                <h3><strong> All Poses </strong></h3>
                <p> Add Poses to your Sequence. Search by English or Sanskirt name. </p>
                <SearchBar/>
                <div className="seq-form-grid-all-poses">
                    {this.props.poses.map(pose => (
                        <Pose
                            key={pose.id}
                            pose={pose}
                            sequence={this.props.sequence}
                            editing={true} />
                    ))}
                </div>
                {this.props.poses.length === 0 ? <div className="message"><h3><strong> - No matches, please try a new search! - </strong></h3></div> : null }
            </div>


            {/* <div>
                <Row className="justify-content-md-center">
                <Col md="auto"></Col>
                
                    <Button className="mybtn" variant="flat" size="md" onClick={this.onSave}> SAVE </Button>
                </Row>
                <br></br>
                <Row className="justify-content-md-center">
                <Col md="auto"></Col>
                <h2> POSES IN SEQUENCE:  </h2>
                <br></br>
            
                </Row>
                <br></br>
                <Row className="justify-content-md-center">
                <Col md="auto"></Col>

                    <SortableComponent poses={this.props.sequence.sequence_poses} sequence={this.props.sequence} onSortEnd={(args)=>{this.props.orderSequencePoseList(args, this.props.sequence.id)}} />

                </Row>
                <br></br>
                <Row className="justify-content-md-center">
                <Col md="auto"></Col>
                <p>
                    NOTES: {this.props.sequence.notes}
                </p>
                </Row>
            
                <br></br>
        
                <h2>POSES :</h2>
                <div className="seqdiv">
                    <Row className="justify-content-md-center">
                    <br></br>
                    <Col md="auto"></Col>
                        {this.props.poses.map(pose => (
                        <Pose
                            key={pose.id}
                            pose={pose}
                            sequence={this.props.sequence}
                            editing={true} />
                    ))}
                    </Row>
                </div>
            </div> */}
        </section>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    let sequenceId = parseInt(ownProps.match.params.id)
    //have to parseInt because the params id is a string
    console.log("state.sequences", state.sequences)
    return {
        // sequence_poses: this.state.sequence.sequence_poses,
        
        sequences: state.sequences,
        sequence: state.sequences.find(s => parseInt(s.id) === sequenceId) || 
                state.sequences.find(s => parseInt(s.id) === ownProps.sequenceId),
        // sequence_poses: state.sequences.find(s => parseInt(s.id) === sequenceId).sequence_poses,
        poses: state.poses.filter(
            pose => 
                pose.english_name.toLowerCase().includes(state.searchText.toLowerCase()) ||
                pose.sanskrit_name.toLowerCase().includes(state.searchText.toLowerCase())
        ),
        currentUser: state.currentUser
        // sequenceposes: state.sequence.sequence_poses.sort((a, b) => (a.position_num  > b.position_num) ? 1: -1)
    }
}

const mapDispatchToProps = (dispatch, props) => ({

    orderSequencePoseList: ({oldIndex, newIndex}, sequenceId) => { 
        // console.log(args)
        dispatch (orderSequencePoseList( oldIndex, newIndex, sequenceId))},
    
    onSaveNewOrder: (sequence, ownProps) => { 
        dispatch (onSaveNewOrder(sequence))}
})




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SequenceForm))
// export default DragDropContext(HTML5Backend)(SequenceForm)