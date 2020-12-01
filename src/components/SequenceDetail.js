import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import SequencePose from './SequencePose'
import { deleteSequence } from '../redux/actions'
import swal from '@sweetalert/with-react'

class SequenceDetail extends React.Component {
    constructor(){
        super()
        this.state = {
            showNotes: false,
            showAlert: false
        }
    }

    sortedPoses = () => {
        return(!this.props.sequence ? null : this.props.sequence.sequence_poses.sort((a, b) => (a.position_num  > b.position_num) ? 1: -1))
    //list.sort((a, b) => (a.color > b.color) ? 1 : -1)
    }

    onDelete = () => {
        // event.preventDefault()
        // this.setState({ showAlert: true})
        // this.handleShowAlert()
        // why this does not work??
        swal({
            className: "swal",
            text: "Sequence deleted",
            buttons: false,
            timer: 1000,
        })

        let info = {
            sequenceId: this.props.sequence.id
        }

        this.props.deleteSequence(info)
    }

    handleHideAlert = () => this.setState({ showAlert: false })

    handleShowAlert = (event, onClick) => {
        event.preventDefault()
        // console.log("hit the handleShowAlert")
        this.setState({ showAlert: true })
        
        swal({
            className: "swal",
            text: "Are you sure you want to delete this sequence?",
            button: "Cancel",
            content: (          
                    <button className="swal-button"  onClick={this.onDelete}>Yes, delete</button>

            )
        })
        
        
    }

   
    onReadNotes = (event) => {
        event.preventDefault()
        this.setState({ showNotes: !this.state.showNotes})
    }

    showReadNotesDiv = () => {
        if (this.state.showNotes){
            return (
                <div className="notes">
                    <p>
                        {this.props.sequence.notes}
                    </p>
                </div>
            )
        }
    }



    render(){

        return (!this.props.sequence ? null : 
        //need to do this to account for INIT state = []
            <section id="sequence-detail">
                <h1 className="page-headers"> {this.props.sequence.name} </h1>
                <p className="ptag"> created by <strong> {this.props.currentUser.first_name} </strong> </p>
                <div className="line"></div>
                <br></br>

                <div className="sequence-detail-grid">
                    <div className="seq-detail-pose-section">
                        <h1> poses </h1>
                        <div className="seq-detail-grid-pose">
                            {this.sortedPoses().map(pose => <SequencePose pose={pose} key={pose.id} editing={false}/>)}
                        </div>
                        {this.sortedPoses().length === 0 ? <div className="message"><h3><strong> - No poses yet, edit this sequence to add some! - </strong></h3></div> : null }
                    </div>

                    <div className="seq-detail-grid-actions">
                        <h3> pose count <br></br> <span> {this.props.sequence.sequence_poses.length} </span></h3>
                        <br></br>
                        <h3> difficulty </h3>
                        <h3> beginner poses <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.difficulty === "beginner").length} </span></h3>
                        <h3> intermediate poses <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.difficulty === "intermediate").length} </span></h3>
                        <h3> advanced poses <br></br><span>{this.props.sequence.sequence_poses.filter(p => p.pose.difficulty === "advanced").length}  </span></h3>
                        <br></br>
                        <h3> {this.state.showNotes ? "hide notes" : "read notes" } </h3>
                        <button className="add" onClick={this.onReadNotes}> {this.state.showNotes ? "-" : "+" }</button><br></br>
                        {this.showReadNotesDiv()}
                        <br></br>
                        <Link to={`${this.props.sequence.id}/edit`}>
                            <h3> edit sequence </h3>
                        </Link>
                        <h3 className="delete" onClick={this.handleShowAlert}> delete sequence </h3>
                    </div>
                </div>
            </section>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    // console.log("SequenceDetail's ownProps", ownProps)
    //first, find the current sequence
    //then, need to find the poses for this sequence
    //use seqence_poses array, use the pose_id
    //map over the poses array in store and find match

    // let sequenceId = parseInt(ownProps.match.params.id)
    //have to parseInt because the params id is a string

    return {
        sequence: state.sequence,
        // sequence: state.sequences.find(s => parseInt(s.id) === sequenceId),
        currentUser: state.currentUser 
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteSequence: info => {
            dispatch(deleteSequence (info, ownProps))
            ownProps.history.push('/sequences')
        }
    } // this reroutes after deleting the sequence, back to sequence page
}
   


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SequenceDetail))

