import React from 'react';
import './App.css';
import { Route, Switch, withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchingPoses, fetchingQuotes, findingUser} from './redux/actions'
import NavBar from './components/NavBar'
import AboutPage from './components/AboutPage'
import ErrorPage from './components/ErrorPage'
import MySequencesPage from './components/MySequencesPage';
import PosesPage from './components/PosesPage'
import PoseDetail from './components/PoseDetail'
import SequenceDetail from './components/SequenceDetail'
import SequenceForm from './components/SequenceForm'
import {Spinner} from 'react-bootstrap'
import HomePage from './components/Homepage'
import QuotesPage from './components/QuotesPage'
import LoginForm from './components/LoginForm'
import DashboardContainer from './components/DashboardContainer'
import Footer from './components/Footer'


class App extends React.Component {

  constructor(){
    super()
    this.state = {
      loading: true
    }
  }

  componentDidMount = () => {
    this.props.fetchingPoses()
    this.props.fetchingQuotes()
    
    if (localStorage.getItem("token")){
      this.props.findingUser(localStorage.getItem("token"))
    }
    
    // this.props.fetchingSequences()

    this.setState({
      loading: false
    })
  }
  //when componentDidMount on App, invoke fetchingPoses function
  // this function is a prop laundered in by mapDispatchToProps

  render(){
    return (
      <div className="App">
          <div className="main">
          <NavBar /> 
          
          {this.state.loading ? <Spinner animation="border" variant="info" /> : 

              <Switch>
                
                <Route exact path="/" component={HomePage} />
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/dashboard" render={()=> this.props.currentUser ? <DashboardContainer/> : <Redirect to="/login"/> } />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/sequences" render={()=> this.props.currentUser ? <MySequencesPage/> : <Redirect to="/login"/> }  />
                <Route exact path="/sequences/:id" render={ (routerProps) => this.props.currentUser ? <SequenceDetail {...routerProps}/> : <Redirect to="/login"/>}  /> 
                <Route exact path="/sequences/:id/edit" render={ (routerProps) => this.props.currentUser ? <SequenceForm {...routerProps}/> : <Redirect to="/login"/>} /> 
                <Route exact path="/poses" component={PosesPage} />
                <Route path="/poses/:id" render={ (routerProps) => {return (<PoseDetail {...routerProps} />)  }} />
                <Route exact path="/quotes" component={QuotesPage}/> 
                <Route exact path="/login" render={() => !this.props.currentUser ? <LoginForm/> : <Redirect to="/dashboard"/> } />
                <Route render={ErrorPage} />

              </Switch>

          }
          </div>
          <Footer/>
        </div>
      )
  }
}
  const mapStateToProps = (state) => {
    return {
      currentUser: state.currentUser
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchingPoses: () => {dispatch( fetchingPoses() )},
      // fetchingSequences: () => {dispatch( fetchingSequences() )},
      fetchingQuotes: () => {dispatch( fetchingQuotes() )},
      findingUser: (token) => {dispatch(findingUser(token))}
    }

  }
  // laundering in this function of fetchPoses to props
  // when this prop function is invoked, it will dispatch
  // the dispatch is the invoking of fetching poses function


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
