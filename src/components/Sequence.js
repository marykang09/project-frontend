import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import SequencePose from './SequencePose'
import { connect } from 'react-redux'
import { foundSequence } from "../redux/actions"

const Sequence = (props) => {
    console.log("Sequence's props:", props)

    return (
        <div>
                <br>
                </br>
        
                <h2>Sequence Name:  
                <Link 
                    className="item" 
                    to={`/mysequences/${props.sequence.id}`}
                    onClick={()=> {
                                console.log("clicked on sequence:", props.sequence)
                                let clickedSequence = props.sequence
                                props.foundSequence(clickedSequence)}} >

                            {props.sequence.name}
                </Link>

                </h2>
            
                <h2>Pose Count: {props.sequence.sequence_poses.length}</h2>

            {/* {props.sequence.sequence_poses.map(
                                sp => (<SequencePose 
                                        key={sp.id}
                                        sp={sp} />))}  */}

            </div>
    )
}


const mapDispatchToProps = dispatch => {
    
    return {
        foundSequence: (sequence) => {dispatch(foundSequence(sequence))}
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Sequence))
// export default Sequence