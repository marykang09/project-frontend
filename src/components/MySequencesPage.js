import React from 'react'
import { withRouter } from 'react-router-dom'
import SequencesList from './SequencesList'
import { connect } from 'react-redux'
import { addingNewSequence } from '../redux/actions'
import swal from 'sweetalert'

class MySequencesPage extends React.Component {
    constructor(){
        super()
        this.state = {
            showCreateForm: false,
            newSequenceName: "",
            newSequenceNotes: ""
        }
    }

    showCreateFormDiv = () => {
        if (this.state.showCreateForm){
            return (
                <div className="create-sequence-form">
                    <form>
                        <label> sequence name </label>
                        <br></br>
                        <input 
                            type="text" 
                            placeholder="" 
                            value={this.state.newSequenceName}
                            onChange={(event) => this.setState({ newSequenceName: event.target.value})}></input>
                        <br></br>
                        <label> sequence notes </label>
                        <br></br>
                        <input
                            type="text"
                            placeholder=""
                            value={this.state.newSequenceNotes}
                            onChange={(event) => this.setState({ newSequenceNotes: event.target.value})}></input>
                        <br></br>
                        <br></br>
                        <button className="add" onClick={this.onCreate}> create! </button>
                    </form>
                </div>
                )
        }
    }

    onShowCreateForm = (event) => {
        event.preventDefault()
        this.setState({ showCreateForm: !this.state.showCreateForm})
    }

    onCreate = (event) => {
        event.preventDefault()

        if (this.state.newSequenceName.length === 0){
            swal({
                className: "swal",
                text: "Please enter a name for your sequence!",
                value: true,
                visible: true,
                closeModal: true,
                button: "OK"
            })
        } else {
            let info = {
                userId: this.props.currentUser.id,              //check this, just added after seeing it after auth
                newSequenceName: this.state.newSequenceName,
                newSequenceNotes: this.state.newSequenceNotes
            }
            
            this.props.addingNewSequence(info)

            this.setState({
                newSequenceName: "",
                newSequenceNotes: "",
                name: this.props.currentUser.first_name
            }) // this is to reset the form 
        }
    }


    render(){
        // console.log("inside mysequences page", this.props.sequences)
        // console.log("what is currentUser?", this.state.name)


        return (!this.props.sequences || !this.props.currentUser ? null : 

                <section id="sequencespage">
                    <h1 className="page-headers"> SEQUENCES </h1>
                    <p className="ptag"> curated by <strong> {this.props.currentUser.first_name} </strong></p>
                    <div className="line"></div>
                    <br></br>
                    <div className="sequences-grid">

                        <div className="sequences-grid-sequences">
                            {this.props.sequences.length === 0 ? <h2>NO SEQUENCES YET</h2> : <SequencesList/> }
                        </div>

                        <div className="sequences-grid-add-seq">
                            <h3> you have <br></br><span> {this.props.sequences.length} </span><br></br> sequences </h3>
                            <br></br>
                            <br></br>
                            
                            <h3> create a <br></br><span> new </span><br></br> sequence </h3>
                            <button className="add" onClick={this.onShowCreateForm}>    
                                {this.state.showCreateForm ? "-" : "+"}
                            </button>
                            {this.showCreateFormDiv()}
                            <br></br>
                        </div>
                        
                    </div>
                    

                    <br></br>
                    &nbsp;

                
                
                </section>
                )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        sequences: state.sequences,
        currentUser: state.currentUser //check this, just added after auth
    }
}

const mapDispatchToProps = dispatch => ({
    addingNewSequence: (info) => { dispatch (addingNewSequence(info))}

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MySequencesPage))