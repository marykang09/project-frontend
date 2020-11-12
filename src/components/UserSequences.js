import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import yogiman from '../assets/images/yogiman.jpeg'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { DropdownDivider } from 'react-bootstrap/Dropdown'

class UserSequences extends React.Component{

    render(){
        return(
            <section id="usersequences">
                <div> this is the user sequences section </div>
                {/* <br></br><br></br> <br></br><br></br> 
                
                <br></br><br></br> <br></br><br></br> <br></br>
                <DropdownButton id="dropdown-item-button" title=" My Sequences " size="lg" bsPrefix="mybtn">
                    {this.props.sequences.map(sequence=> <Link to={`/sequences/${sequence.id}`}><Dropdown.Item as="button" className="mybtn"> {sequence.name} </Dropdown.Item></Link>)}
                    <Dropdown.Divider/>
                    <Link to="/sequences"><Dropdown.Item className="mybtn" as="button"> All Sequences </Dropdown.Item></Link>
                </DropdownButton> */}
                
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sequences: state.sequences
    }
}

export default connect(mapStateToProps)(UserSequences)