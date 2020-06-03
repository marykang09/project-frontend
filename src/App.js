import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchingPoses} from './redux/actions'

import NavBar from './components/NavBar'
import AboutPage from './components/AboutPage'
import ErrorPage from './components/ErrorPage'

class App extends React.Component {

  componentDidMount = () => {
    this.props.fetchingPoses()
  }
  //when componentDidMount on App, invoke fetchingPoses function
  // this function is a prop laundered in by mapDispatchToProps

  render(){
    return (
      <div className="App">
      <NavBar /> 
      <Switch>
        <Route exact path="/about" component={AboutPage} />
        <Route render={ErrorPage} />
      </Switch>
      </div>
    )
  }
}

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchingPoses: () => {dispatch( fetchingPoses() )}
    }
  }
  // laundering in this function of fetchPoses to props
  // when this prop function is invoked, it will dispatch
  // the dispatch is the invoking of fetching poses function


export default withRouter(connect(null, mapDispatchToProps)(App))
