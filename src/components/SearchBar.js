import React from 'react'
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeSearchText } from "../redux/actions"

const SearchBar = (props) => {
    
    

    return (
        <div>
            <FormControl 
                bsPrefix="customsearch"
                type="text" 
                placeholder="SEARCH FOR A POSE..." 
                className="mr-sm-2"
                value={props.value}
                onChange={e => props.onChange(e.target.value)} />

                    <>
                    <style type="text/css">
                        {`
                        .btn-flat {
                        background-color: #ABDAE1;
                        color: white;
                        }

                        .btn-md {
                        padding: 1rem 1.5rem;
                        font-size: 1.5rem;
                        }
                        `}
                    </style>
                    </>
                <Link className="item" to='/poses' >
                    <Button className="my-btn" variant="flat" size="md">
                        SEARCH
                    </Button>
                </Link>
                    <br></br>
            {/* <form class="search-container" >
                <input type="text" id="search-bar" placeholder="What can I help you with today?">
                <img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" />
            </form> */}
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