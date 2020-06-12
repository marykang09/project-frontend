import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {Col, Container, Row, Button} from 'react-bootstrap'
import SequencePose from './SequencePose'
import Pose from './Pose'
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move' 
// import Draggable from "react-draggable";
import { orderSequencePoseList, onSaveNewOrder } from '../redux/actions'
import styled from 'styled-components'; 
import SearchBar from './SearchBar'

// import CardContainer from './CardContainer'
////// tutorial ////////
// import Card from './Card' 
// import { DragDropContext, HTML5Backend } from 'react-dnd'
// const update = require('immutability-helper');

    /////////////////////////// this is part of the tutorial ///////////////////////////
    // moveCard = (dragIndex, hoverIndex) => {
    //     const { cards } = this.state
    //     const dragCard = cards[dragIndex]
    
    //     this.setState(
    //       update(this.state, {
    //         cards: {
    //           $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
    //         },
    //       }),
    //     )
    // }
    /////////////////////////// this is part of the tutorial ///////////////////////////



    //*//*//*//*//*//*//*//*// this is part of the react redux example  //*//*//*//*//*//*//*//*// 

    let SortableItem = SortableElement(({pose, sequence}) => {

        return (
            // <li className="col-6 col-md-4 col-lg-3 mt-3 px-2">
            <li className="justify-content-md-center" style={{listStyleType: "none"}}>
                <SequencePose pose={pose} sequence={sequence} editing={true}/>
                {/* <SequencePose pose={pose} sequence={props.sequence} editing={true}/> */}
                {/* <img className="image-item" src={value.img_url}/> */}
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

    //*//*//*//*//*//*//*//*// this is part of the react example  //*//*//*//*//*//*//*//*// 



    class SequenceForm extends React.Component {
        constructor() {
            super()
            this.state = {
            }
        }
    
        onSave = event => {
            // event.preventDefault()
            //updated sequence info
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

        const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: white;
        `;
    
        const Wrapper = styled.section`
        padding: 2.5em;
        background: #a3b9c9;
        `;

        const TitleWrapper = styled.section`
        padding: 1.5em;
        background: #ABDAE1;
        `;

        
        return (!this.props.sequence ? null : 
                <div>
                    
                        <Wrapper>
                            <Title>
                                <Row className="justify-content-md-center">
                                    <Col md="auto"></Col>
                                    <h1> SEQUENCE: {this.props.sequence.name} </h1>
                                </Row>
                                <br></br>
                                <h2> 
                                    {this.props.sequence.sequence_poses.length === 0 ? "ADD SOME POSES" : `POSE COUNT: ${this.props.sequence.sequence_poses.length}`}
                                </h2> 
                            </Title>   
                        </Wrapper>

                        <br></br>
                        <SearchBar/> 
                        <br></br>

                                <Row className="justify-content-md-center">
                                <Col md="auto"></Col>
                                    <Button variant="flat" size="md" onClick={()=>{this.props.onSaveNewOrder(this.props.sequence)}}> SAVE </Button>
                                </Row>
                                <br></br>
                                <Row className="justify-content-md-center">
                                <Col md="auto"></Col>
                                <h2> POSES IN SEQUENCE:  </h2>
                                <br></br>
                                {/* {this.props.sequence.sequence_poses.map(pose => <SequencePose pose={pose} sequence={this.props.sequence} editing={true}/> )} */}
                                </Row>
                                <br></br>
                                <Row className="justify-content-md-center">
                                <Col md="auto"></Col>
                                {/* /////////////////////  //*//*//*//*//*//*//*//*// this is part of the react example  //*//*//*//*//*//*//*//*// ///////////////////// */}
                                {/* <div className="grid-list-container"> */}
                                    <SortableComponent poses={this.props.sequence.sequence_poses} sequence={this.props.sequence} onSortEnd={(args)=>{this.props.orderSequencePoseList(args, this.props.sequence.id)}} />
                                {/* </div> */}
                                {/* /////////////////////  //*//*//*//*//*//*//*//*// this is part of the react example  //*//*//*//*//*//*//*//*// ///////////////////// */}
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
        )
        // sequenceposes: state.sequence.sequence_poses.sort((a, b) => (a.position_num  > b.position_num) ? 1: -1)
    }
}

const mapDispatchToProps = (dispatch, props) => ({

    orderSequencePoseList: ({oldIndex, newIndex}, sequenceId) => { 
        // console.log(args)
        dispatch (orderSequencePoseList( oldIndex, newIndex, sequenceId))},
    
    onSaveNewOrder: (sequence) => { 
        console.log("onSaveNewOrder:", sequence)
        dispatch (onSaveNewOrder(sequence))}
})




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SequenceForm))
// export default DragDropContext(HTML5Backend)(SequenceForm)