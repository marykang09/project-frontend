import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import SequencePose from './SequencePose'
import Pose from './Pose'
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import { orderSequencePoseList, onSaveNewOrder, updateClickedSequence } from '../redux/actions'
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
//this.props.sequence.sequence_poses.sort((a, b) => (a.position_num  > b.position_num) ? 1: -1)
let SortableList = SortableContainer(({poses, sequence}) => {
    return (
        <ul className="row" style={{listStyleType: "none"}}>
            {/* {poses.map((pose, index) => ( */}
            {poses.map((pose, index) => (
            <SortableItem key={`pose-${pose.id}`} index={index} pose={pose} sequence={sequence} />
            ))}
        </ul>
        )
    })

class SortableComponent extends React.Component {
    
    render() {
    // console.log("in SortableComponent, this.props:" ,this.props)

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
            text: "add or remove poses, then drag them into order",
            value: true,
            visible: true,
            className: "swal",
            closeModal: true,
            button: "got it!"
        })
    )
}

onSave = () => {
    this.props.onSaveNewOrder(this.props.sequence)

    return(
        swal({
            text: "your sequence has been saved!",
            value: true,
            visible: true,
            className: "swal",
            closeModal: true,
            button: "okay!"
        })
    )
}

sortedPoses = () => {
    return(!this.props.sequence ? null : this.props.sequence.sequence_poses.sort((a, b) => (a.position_num  > b.position_num) ? 1: -1))
//list.sort((a, b) => (a.color > b.color) ? 1 : -1)
} 
// this is to sort, if i need to sort by the position number attribute, use in place of this sequences poses when mapping to render <SequencePose> below

render(){
// console.log("SequenceForm's props", this.props)

return (!this.props.sequence ? null : 

        <section id="sequence-form">
            <h1 className="page-headers"> {this.props.sequence.name} </h1>
            <p className="ptag"> created by <strong> {this.props.currentUser.first_name} </strong> </p>
            <div className="line"></div>
            <br></br>

            <div className="top-grid">
                <div className="seq-form-poses">
                    <div className="inner">
                        <h3><strong> current poses in sequence </strong></h3>
                        <p> drag and drop poses into your desired order, or remove poses </p>
                        <div className="seq-form-grid-poses">
                            <SortableComponent poses={this.props.sequence.sequence_poses} sequence={this.props.sequence} onSortEnd={(args)=>{this.props.orderSequencePoseList(args, this.props.sequence.id)}} />
                        </div>
                        {this.props.sequence.sequence_poses.length === 0 ? <div className="message"><h3><strong> - No poses yet, add some below! - </strong></h3></div> : null }
                    </div>
                </div>

                <div className="seq-form-grid-action">
                    <div className="grid-info">
                        <div className="grid-info-header">
                            <h3><strong> pose count </strong><br></br><span> {this.props.sequence.sequence_poses.length} </span></h3>
                            <h3><strong> save </strong><br></br><button className="save" onClick={this.onSave}> ✓ </button></h3>
                        </div>

                        <div className="grid-info-stats">
                            <div className="difficulty">
                                <h3><em><strong> difficulty </strong></em></h3>
                                <h3> beginner <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.difficulty === "beginner").length} </span></h3>
                                <h3> intermediate <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.difficulty === "intermediate").length} </span></h3>
                                <h3> advanced <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.difficulty === "advanced").length}  </span></h3>
                            </div>
                            <div className="category">
                                <h3><em><strong> category </strong></em></h3>
                                <h3> standing <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.category === "standing").length} </span></h3>
                                <h3> seated <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.category === "seated").length} </span></h3>
                                <h3> supine <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.category === "supine").length}  </span></h3>
                                <h3> prone <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.category === "prone").length}  </span></h3>
                                <h3> arm & leg support <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.category === "arm and leg support").length}  </span></h3>
                                <h3> arm balance & inversion <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.category === "arm balance and inversion").length}  </span></h3>
                            </div>
                            <div className="action">
                                <h3><em><strong> action </strong></em></h3>
                                <h3> back bend <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.action === "back bend").length} </span></h3>
                                <h3> forward bend <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.action === "forward bend").length} </span></h3>
                                <h3> lateral bend <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.action === "lateral bend").length}  </span></h3>
                                <h3> twist <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.action === "twist").length}  </span></h3>
                                <h3> balance <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.action === "balance").length}  </span></h3>
                                <h3> neutral <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.action === "neutral").length}  </span></h3>
                            </div>
                        </div>
                        
                    </div>
                    <div className="grid-notes">
                        <h3> notes <br></br><span> {this.props.sequence.notes.length > 0 ? this.props.sequence.notes : "N/A"} </span></h3>
                    </div>
                    
                </div>

            </div>

            <div className="line"></div>
            <div className="seq-form-all-poses">
                <h3><strong> all poses </strong></h3>
                <p> add poses to your sequence - search by english or sanskirt name. </p>
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
                {this.props.poses.length === 0 ? <div className="message"><h3><strong> - no matches, please try a new search! - </strong></h3></div> : null }
            </div>
        </section>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    // let sequenceId = parseInt(ownProps.match.params.id)
    //have to parseInt because the params id is a string
    // console.log("state.sequences", state.sequences)
    
    return {
        // sequence_poses: this.state.sequence.sequence_poses,
        //   this.props.sequence.sequence_poses.sort((a, b) => (a.position_num  > b.position_num) ? 1: -1))

        sequences: state.sequences,
        sequence: state.sequence,
        // sequence: state.sequences.find(s => parseInt(s.id) === sequenceId) || 
        //         state.sequences.find(s => parseInt(s.id) === ownProps.sequenceId),

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
        dispatch (orderSequencePoseList( oldIndex, newIndex, sequenceId))
        dispatch (updateClickedSequence( oldIndex, newIndex, sequenceId))
    },
    onSaveNewOrder: (sequence, ownProps) => { 
        dispatch (onSaveNewOrder(sequence))}
})




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SequenceForm))
// export default DragDropContext(HTML5Backend)(SequenceForm)