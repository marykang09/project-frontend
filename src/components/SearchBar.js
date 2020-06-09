import React from 'react'
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { changeSearchText } from "../redux/actions"

const SearchBar = (props) => {
    
    return (
        <div>
            <FormControl 
                type="text" 
                placeholder="Search for a pose..." 
                className="mr-sm-2"
                value={props.value}
                onChange={e => props.onChange(e.target.value)} />

        </div>
    )
}

const mapStateToProps = state => {
    return {
        value: state.searchText
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (searchText) => {dispatch(changeSearchText(searchText))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)