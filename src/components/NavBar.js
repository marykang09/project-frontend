import React from 'react'
import { Link, NavLink, withRouter, Redirect } from "react-router-dom"
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap'
import SearchBar from './SearchBar'
import { connect } from 'react-redux'
import { logoutCurrentUser } from '../redux/actions'

const NavBar = (props) => {

    return (
        <Navbar className="color-nav" fixed="top" className="sticky" bg="light" variant="light" expand="lg">
            <Navbar.Brand href="/"> YOGA APP  </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/poses"> POSES </Nav.Link>
                    <br></br>
                    <Nav.Link href="/sequences">MY SEQUENCES </Nav.Link>
                    <br></br>
                    <Nav.Link href="/quotes"> INSPIRATION </Nav.Link>
                    <br></br>
                    <Nav.Link href="/about"> ABOUT </Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}

                    {props.currentUser ? <Button variant="flat" size="md" onClick={()=> props.logoutCurrentUser()}> Sign Out </Button> : null }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    
    )
}

const mapStateToProps = (state) => {
    return { currentUser: state.currentUser }
}

const mapDispatchToProps = (dispatch) => {
    return { logoutCurrentUser: () => {dispatch(logoutCurrentUser())} }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))