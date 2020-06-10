import React from 'react'
import { Link, NavLink, withRouter } from "react-router-dom"
import { Navbar, Nav, Form, NavDropdown, FormControl, Button } from 'react-bootstrap'
import SearchBar from './SearchBar'

const NavBar = (props) => {

    return (
        <Navbar style={{backgroundColor: "teal"}} className="color-nav" fixed="top" className="sticky" bg="light" variant="light" expand="lg">
            <Navbar.Brand href="/"> YOGA APP  </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/poses"> POSES </Nav.Link>
                <br></br>
                <Nav.Link href="/sequences">MY SEQUENCES </Nav.Link>
                <br></br>
                <Nav.Link href="/about"> ABOUT </Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}

                </Nav>

                <Form inline>
                    <SearchBar />
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

                    <Button variant="flat" size="md">
                        SEARCH
                    </Button>
                    </>
                </Form>

            </Navbar.Collapse>
        </Navbar>
    



    )
}

export default withRouter(NavBar)