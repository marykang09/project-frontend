import React from 'react'
import { loginUser } from '../redux/actions'
import { connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Form, FormControl, Button} from 'react-bootstrap'
import swal from '@sweetalert/with-react'
import yogi from '../assets/images/yogi2.png'

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
        return this.props.currentUser ? <Redirect to="/login"/> : 
            <div className="padding">
                <div className="login-page">
                    <div className="login-image">
                        <img src={yogi} style={{width: "50%"}}/>
                    </div>

                    <br></br>
                    <br></br>

                    <div className="login-form">
                        <Form inline >
                            <FormControl size="lg" type="text" placeholder="USERNAME" className="mx-sm-3" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value})}  />
                            <br></br>
                            <FormControl size="lg" type="text" placeholder="PASSWORD" className="mx-sm-3" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value})}  />
                            <Button className="mybtn" variant="flat" size="md" onClick={this.onSubmit}> LOGIN </Button>
                        </Form>
                    </div>

                    <br></br>
                    <div className="login-error"> { this.props.errors ? this.props.errors : null} </div>
                </div>
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