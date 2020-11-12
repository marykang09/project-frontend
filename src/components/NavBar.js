import React, { Component } from 'react'
import { Link, NavLink, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import { logoutCurrentUser } from '../redux/actions'

class NavBar extends Component {
    state = {
        active: null
    }

    handleClick = (event) => {
        this.setState({
            active: event.target.name
        })
    }

    render(){
        return (
            <section id="nav">
                <nav id="nav-wrap">
                    <ul id="nav">
                        <li><NavLink className={this.state.active === "HOME" ? "current" : null} name="HOME" exact to="/home" onClick={this.handleClick}> HOME </NavLink></li>
                        <li><NavLink className={this.state.active === "ABOUT" ? "current" : null} name="ABOUT" exact to="/about" onClick={this.handleClick}> ABOUT </NavLink></li>
                        <li><NavLink className={this.state.active === "POSES" ? "current" : null} name="POSES" exact to="/poses" onClick={this.handleClick}> POSES </NavLink></li>
                        <li><NavLink className={this.state.active === "SEQUENCES" ? "current" : null} name="SEQUENCES" exact to="/sequences" onClick={this.handleClick}> SEQUENCES </NavLink></li>
                        <li><NavLink className={this.state.active === "QUOTES" ? "current" : null} name="QUOTES" exact to="/quotes" onClick={this.handleClick}> QUOTES </NavLink></li>
                        <li><NavLink className={this.state.active === "DASHBOARD" ? "current" : null} name="DASHBOARD" exact to="/dashboard" onClick={this.handleClick}> DASHBOARD </NavLink></li>
                        {this.props.currentUser ? 
                            <li className={this.state.active === "SIGNOUT" ? "current" : null} name="SIGNOUT" onClick={()=> this.props.logoutCurrentUser()}> SIGN OUT </li> : 
                            <li><NavLink className={this.state.active === "SIGNIN" ? "current" : null} name="SIGNIN" exact to="/login" onClick={this.handleClick}> SIGN IN </NavLink></li> }
                    </ul>
                </nav>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return { currentUser: state.currentUser }
}

const mapDispatchToProps = (dispatch) => {
    return { logoutCurrentUser: () => {dispatch(logoutCurrentUser())} }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))