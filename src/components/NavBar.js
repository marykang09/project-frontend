import React from 'react'
import { Link, NavLink, withRouter, Redirect } from "react-router-dom"
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap'
import SearchBar from './SearchBar'
import { connect } from 'react-redux'
import { logoutCurrentUser } from '../redux/actions'

const NavBar = (props) => {

    return (
        <Navbar className="sticky" fixed="top" expand="lg">
        <Navbar.Brand href="/"> YOGA APP  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/poses" className="nav-link" style={{color: "white"}}> POSES </Nav.Link>
                    <br></br>
                    <br></br>
                    <Nav.Link href="/sequences" className="nav-link" style={{color: "white"}}> MY SEQUENCES </Nav.Link>
                    <br></br>
                    <br></br>
                    <Nav.Link href="/dashboard" className="nav-link" style={{color: "white"}}> DASHBOARD </Nav.Link>
                    <br></br>
                    <br></br>
                    <Nav.Link href="/quotes" className="nav-link" style={{color: "white"}}> INSPIRATION </Nav.Link>
                    <br></br>
                    <br></br>
                    <Nav.Link href="/about" className="nav-link" style={{color: "white"}}> ABOUT </Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                    <br></br>
                    {props.currentUser ? <Button className="mybtn" variant="flat" size="md" onClick={()=> props.logoutCurrentUser()}> SIGN OUT </Button> : <Link to="/login"><Button className="mybtn" variant="flat" size="md" onClick> SIGN IN </Button></Link> }
                </Nav>
            </Navbar.Collapse>
        </Navbar>


 
        // testing nav div
        // <div id="nav-bar">
        //     <div id="nav-logo">
        //         Yoga App
        //     </div>

        //     <div id="nav-menu">
        //         <div className="nav-button"> POSES </div>
        //         {props.currentUser ? <div className="nav-button" onClick={()=> props.logoutCurrentUser()} > SIGN OUT </div> : <div className="nav-button"> SIGN IN </div> }
        //     </div>
        // </div>


    )
}

const mapStateToProps = (state) => {
    return { currentUser: state.currentUser }
}

const mapDispatchToProps = (dispatch) => {
    return { logoutCurrentUser: () => {dispatch(logoutCurrentUser())} }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))