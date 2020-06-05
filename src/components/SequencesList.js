import React from 'react'
import Sequence from './Sequence.js'
import { connect } from 'react-redux'

const SequencesList = (props) => {

    return (
        <div>
            <br></br>
            <h1>this is the SequencesList</h1>

            {props.sequences.map(sequence => (
                <Sequence
                    key={sequence.id}
                    sequence={sequence} />
            ))}

        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        sequences: state.sequences
    }
}

export default connect(mapStatetoProps)(SequencesList)