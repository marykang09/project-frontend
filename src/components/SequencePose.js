import React from 'react'
import { connect } from 'react-redux'
import { removingFromSequence } from '../redux/actions'

class SequencePose extends React.Component {

    onRemove = (event) => {
        event.preventDefault()

        let info = {
            sequencePoseId: this.props.pose.id,
            sequenceId: this.props.pose.sequence_id
        }

        this.props.removingFromSequence(info)
    }


    render(){



    
    return (!this.props.pose ? null : 
        //need to do this to account for INIT state = []

        <section id="seqpose-card">
            <div className="card">
                <img src={this.props.pose.pose.img_url} alt={this.props.pose.pose.english_name}></img>
                <div className="seqpose-card-info">
                    <h3> {this.props.pose.pose.english_name} </h3>
                    <p> {this.props.pose.pose.sanskrit_name} </p>
                    {this.props.editing ? <button className="remove" onClick={this.onRemove}> Remove </button> : null }
                </div>
            </div>
        </section>

        // <div>
        //      <Card border="light" style={{ width: '18rem' }}>
        //         <Card.Img variant="top" src={this.props.pose.pose.img_url} />
        //         <Card.Body>
        //             <Card.Title>{this.props.pose.pose.english_name}</Card.Title>
        //             <Card.Text>{this.props.pose.pose.sanskrit_name}</Card.Text>
        //             {this.props.editing ? (
        //                                         <>
        //                                         <style type="text/css">
        //                                             {`
        //                                             .btn-flat {
        //                                             background-color: #A09CB0;
        //                                             color: white;
        //                                             }
                            
        //                                             .btn-md {
        //                                             padding: 1rem 1.5rem;
        //                                             font-size: 1.5rem;
        //                                             }
        //                                             `}
        //                                         </style>
                            
        //                                         <Button className="mybtn" variant="flat" size="md" onClick={this.onRemove} >
        //                                             REMOVE
        //                                         </Button>
        //                                         </> ) : null
        //                             }
        //         </Card.Body>
        //     </Card>

        // </div>
    )}
}


const mapDispatchToProps = dispatch => ({
    removingFromSequence: (info) => { dispatch (removingFromSequence(info))}
})

export default connect(null, mapDispatchToProps)(SequencePose)