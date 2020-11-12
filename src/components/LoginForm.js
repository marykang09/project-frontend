import React from 'react'
import { loginUser } from '../redux/actions'
import { connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import yogi from '../assets/images/yogi2.png'
import NewUserForm from './NewUserForm'

class LoginForm extends React.Component { 
    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.loginUser(this.state)
        this.setState({
            username: "",
            password: ""
        }) // reset the form
    }

    onChange = (event) => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        }) // sets current typing text to state for both
    }

    render (){
        return this.props.currentUser ? <Redirect to="/dashboard"/> : 
                <section id="login-page">
                    <br></br>
                    <h1> SIGN IN TO YOUR ACCOUNT </h1>
                    <div className="line"></div>
                    <div className="login-error"> { this.props.errors ? this.props.errors : null} </div>
                    <div className="login-grid"> 
                        <div className="login-form">
                            <h3> WELCOME BACK </h3>
                            <form>
                                <label> Username </label><input type="text" placeholder="" className="mx-sm-3" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value})}  />
                                <br></br>
                                <label> Password </label><input type="text" placeholder="" className="mx-sm-3" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value})}  />
                                <br></br>
                                <button onClick={this.onSubmit}> SIGN IN </button>                            
                            </form>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h3> NEW AROUND HERE? </h3>
                            <NewUserForm/>
                        </div>
                        <div className="login-img"> 
                            <img src={yogi} alt="yogi"/>
                            <br></br>
                        </div>
                    </div>
                </section>
    }    

}

const mapStateToProps = (state, ownProps) => {
    // console.log("in mapStateToProps, what is state?", state)
    // console.log("in mapStateToProps, what is ownProps?", ownProps)

    return {
        currentUser: state.currentUser,
        errors: state.errors
    }
}

const mapDispatchToProps = (dispatch, userInfo) => {

    // console.log("inside mapDispatchToProps, what is userInfo?", userInfo)
    return {
        loginUser: (userInfo) => dispatch(loginUser(userInfo))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)