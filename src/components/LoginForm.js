import React from 'react'
import { loginUser } from '../redux/actions'
import { connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Form, FormControl, Button} from 'react-bootstrap'
import swal from '@sweetalert/with-react'

class LoginForm extends React.Component { 
    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    onSubmit = (event) => {
        console.log("inside onSubmit")
        event.preventDefault()

        // if (this.props.errors.length > 0){
        //     swal({
        //         className: "swal",
        //         text: this.props.errors,
        //         buttons: "OK",
        //         timer: 2500
        //     })
        // } else {
        //     this.props.loginUser(this.state)
        // }

        this.props.loginUser(this.state)
        this.setState({
            username: "",
            password: ""
        }) // reset the form
    }

    onChange = (event) => {
        console.log(event)

        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        }) // sets current typing text to state for both
    }

    render (){
        return this.props.currentUser ? <Redirect to="/sequences" /> : 

            <div className="user-form">
                <h1> Log In</h1>
                <br></br>
                <Form inline>
                    <FormControl type="text" placeholder="USERNAME" className="mr-sm-2" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value})}  />
                    <br></br>
                    <FormControl type="text" placeholder="PASSWORD" className="mr-sm-2" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value})}  />
                    <Button variant="flat" size="md" onClick={this.onSubmit}> LOGIN </Button>
                </Form>

                <br></br>
                <div> { this.props.errors ? this.props.errors : null} </div>
            </div>

        
    }

}

const mapStateToProps = (state, ownProps) => {
    console.log("in mapStateToProps, what is state?", state)
    console.log("in mapStateToProps, what is ownProps?", ownProps)

    return {
        currentUser: state.currentUser,
        errors: state.errors
    }
}

const mapDispatchToProps = (dispatch, userInfo) => {

    console.log("inside mapDispatchToProps, what is userInfo?", userInfo)
    return {
        loginUser: (userInfo) => dispatch(loginUser(userInfo))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)