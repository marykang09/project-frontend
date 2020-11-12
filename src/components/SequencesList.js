import React from 'react'
import Sequence from './Sequence.js'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const SequencesList = (props) => {

    return (!props.sequences ? null : 

        <section id="sequenceslist">
            <div className="sequencelist-div">
                {props.sequences.map(sequence => ( <Sequence key={sequence.id} sequence={sequence} /> ))}
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        sequences: state.sequences
    }
}

export default withRouter(connect(mapStateToProps)(SequencesList))