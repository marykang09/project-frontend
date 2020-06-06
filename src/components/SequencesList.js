import React from 'react'
import Sequence from './Sequence.js'
import { connect } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const SequencesList = (props) => {

    return (
        <div>
            <Container>
            <br></br>
                <Row className="justify-content-md-center">
                <Col md="auto"></Col>
            {props.sequences.map(sequence => (
                <Sequence
                    key={sequence.id}
                    sequence={sequence} />
            ))}
                </Row>
            </Container>
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        sequences: state.sequences
    }
}

export default connect(mapStatetoProps)(SequencesList)