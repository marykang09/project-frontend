import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createNewUser } from '../redux/actions'

class NewUserForm extends React.Component {
    constructor(){
        super()
        this.state = {
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            usernameConfirm: false,
            formConfirm: false,
            errors: {
                form: "",
                username: ""
            }
        }
    }

    formValidation = () => {
        if (this.state.first_name.length > 0 && this.state.last_name.length > 0 && this.state.username.length > 0 && this.state.password.length > 0){
            this.setState({
                formConfirm: true
            })
        } else if (this.state.first_name.length === 0 || this.state.last_name.length === 0 || this.state.username.length === 0 || this.state.password.length === 0){
            this.setState({
                formConfirm: false,
                errors: {
                    ...this.state.errors,
                    form: "please fill in all fields"
                }
            })
        }
    }

    usernameValidation = (username) => {

        fetch('http://localhost:3000/users')
        .then (response => response.json())
        .then(users => {
            let usernameTaken = users.find(user => user.username === username)

            if (usernameTaken){
                this.usernameDenied()
            } else {
                this.usernameConfirmed()
            }
        })
    }

    
    usernameConfirmed = () => {
        this.setState({
            usernameConfirm: true,
            errors: {
                ...this.state.errors,
                username: ""
            }
        })
    }

    usernameDenied = () => {
        this.setState({
            usernameConfirm: false,
            errors: {
                ...this.state.errors,
                username: "username is already taken"
            }
        })
    }

    onChange = (event) => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        })
        
        if (event.currentTarget.id === "username"){
            this.usernameValidation(event.currentTarget.value)
        } // if a username is typed in, start checking, if this was done in onSubmit, will be too late

        this.formValidation()
    }

    onSubmit = (event) => {
        event.preventDefault()
        // this.usernameValidation(this.state.username) -- this has been moved to check during onChange
        // this.formValidation() -- same with this

        if (this.state.usernameConfirm && this.state.first_name.length > 0 && this.state.last_name.length > 0 && this.state.username.length > 0 && this.state.password.length > 0){
            this.props.createNewUser({ 
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                username: this.state.username,
                password: this.state.password
            })
        }
    }

    render(){

        return this.props.currentUser ? <Redirect to="/dashboard" /> : 

        <section id="userform">
            <form >
                <label> first name </label> &nbsp;
                <input id="first_name" type="text" placeholder="" value={this.state.first_name} onChange={this.onChange} />
                <br></br>
                <label> last name </label> &nbsp;
                <input id="last_name" type="text" placeholder="" value={this.state.last_name} onChange={this.onChange} />
                <br></br>
                <label> username </label> &nbsp;
                <input id="username" type="text" placeholder="" value={this.state.username} onChange={this.onChange} />
                <br></br>
                <label> password </label> &nbsp;
                <input id="password" type="text" placeholder="" value={this.state.password} onChange={this.onChange} />
                <br></br>
                <button className="affirm" onClick={this.onSubmit}> create </button>
            </form>
            <br></br>
            <div className="error">
                <div className="error-text"> {this.state.first_name.length === 0 || this.state.last_name.length === 0 || this.state.username.length === 0 || this.state.password.length === 0 ? this.state.errors.form : null } </div>
                <div className="error-text"> {!this.state.usernameConfirm ? this.state.errors.username : null }  </div>
            </div>
        </section>
    }

}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewUser: (userInfo) => {dispatch(createNewUser(userInfo))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm)