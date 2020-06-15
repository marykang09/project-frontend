import React from 'react'
import Sequence from './Sequence.js'
import { connect } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { withRouter } from 'react-router-dom'

const SequencesList = (props) => {

    return (!props.sequences ? <h2> null </h2> : 

        <div>
            <Container>
                
                <Row className="justify-content-md-center">
                <Col md="auto"></Col>
                    {props.sequences.map(sequence => ( <Sequence key={sequence.id} sequence={sequence} /> ))}
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        sequences: state.sequences
    }
}

export default withRouter(connect(mapStateToProps)(SequencesList))