import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UserQuotes extends React.Component{

    render(){
        return(
            <div className="userquotes">
                <br></br><br></br> <br></br><br></br> 
                
                <br></br><br></br> <br></br><br></br> <br></br>
                <DropdownButton id="dropdown-item-button" title=" My Quotes " size="lg" bsPrefix="mybtn">
                    {this.props.user_quotes.map(uq=> <Dropdown.Item as="button" bsPrefix="mybtn"> {uq.quote.quote} </Dropdown.Item>)}
                    <Dropdown.Divider/>
                    <Link to="/quotes"><Dropdown.Item as="button"> All Quotes </Dropdown.Item></Link>
                </DropdownButton>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user_quotes: state.userQuotes
    }
}

export default connect(mapStateToProps)(UserQuotes)