import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Form, FormControl, Button } from 'react-bootstrap'
import { createNewUser } from '../redux/actions'
import swal from 'sweetalert'

class NewUserForm extends React.Component {
    constructor(){
        super()
        this.state = {
            first_name: "",
            last_name: "",
            username: "",
            password: "",
            usernameConfirm: true,
            errors: {
                username: ""
            }
        }
    }

    usernameValidation = (username) => {
        fetch('http://localhost:3000/users')
        .then (response => response.json())
        .then(users => {
            let usernameTaken = users.find(user => user.username === username)
            if (usernameTaken){
                this.usernameConfirmed()
            } else {
                this.usernameDenied()
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
                username: "Username is not available. Please try another."
            }
        })
    }

    onChange = (event) => {
        console.log("inside onChange, event", event)
        console.log("inside onChange, event.currentTarget.id:", event.currentTarget.id)
        console.log("inside onChange, event.currentTarget.value :", event.currentTarget.value)

        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        })

        // if (event.currentTarget.id === "username"){
        //     this.usernameValidation(event.currentTarget.value)
        // }
    }

    onSubmit = (event) => {
        event.preventDefault()

        if (this.state.usernameConfirm){
            this.props.createNewUser({ 
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                username: this.state.username,
                password: this.state.password
             })
        }
        
    }

    render(){
        return this.props.currentUser ? <Redirect to="/sequences" /> : 

        <div className="user-form">
            
            <div>
                <Form >
                    <Form.Label> FIRST NAME </Form.Label>
                    <FormControl id="first_name" type="text" placeholder="FIRST NAME" value={this.state.first_name} onChange={this.onChange} />

                    <Form.Label> LAST NAME </Form.Label>
                    <FormControl id="last_name" type="text" placeholder="LAST NAME" value={this.state.last_name} onChange={this.onChange} />

                    <Form.Label> USERNAME </Form.Label>
                    <FormControl id="username" type="text" placeholder="USERNAME" value={this.state.username} onChange={this.onChange} />

                    <Form.Label> PASSWORD </Form.Label>
                    <FormControl id="password" type="text" placeholder="PASSWORD" value={this.state.password} onChange={this.onChange} />

                    <Button variant="flat" size="md" onClick={this.onSubmit}> CREATE </Button>
                </Form>
            </div>
            <div className="error">
                { !this.state.usernameConfirm ? <div>{this.state.errors.username}</div> : null}
            </div>
        </div>
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