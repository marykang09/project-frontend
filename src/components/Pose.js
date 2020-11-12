import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addingToSequence } from '../redux/actions'

class Pose extends React.Component {

    onAdd = event => {
        event.preventDefault()

        let info = {
            sequenceId: this.props.sequence.id,
            pose: this.props.pose
        }
        
        this.props.addingToSequence(info)
    }

    render(){
        return (
            
            <section id="pose-card">
                <Link className="card-link" to={`/poses/${this.props.pose.id}`} >
                    <div className="card">
                        <img src={this.props.pose.img_url} alt={this.props.pose.english_name} className="pose-card-img"/>
                        <br></br>
                        <div className="pose-card-info">
                            <h3> {this.props.pose.english_name} </h3>
                            <p> {this.props.pose.sanskrit_name} </p>
                            {this.props.editing ? <button className="add" onClick={this.onAdd}> Add </button> : null}
                        </div>
                    </div>
                </Link>
            </section>
            
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addingToSequence: (info) => { dispatch ( addingToSequence(info))}
})

export default connect(null, mapDispatchToProps)(Pose)