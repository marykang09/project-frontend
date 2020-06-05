import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchingPoses, fetchingSequences} from './redux/actions'

import NavBar from './components/NavBar'
import AboutPage from './components/AboutPage'
import ErrorPage from './components/ErrorPage'
import MySequencesPage from './components/MySequencesPage';
import PosesPage from './components/PosesPage'
import PoseDetail from './components/PoseDetail'
import SequenceDetail from './components/SequenceDetail'

class App extends React.Component {

  componentDidMount = () => {
    this.props.fetchingPoses()
    this.props.fetchingSequences()
  }
  //when componentDidMount on App, invoke fetchingPoses function
  // this function is a prop laundered in by mapDispatchToProps

  render(){
    return (
      <div className="App">
      <div className="sticky">
          <NavBar /> 
      </div>
      <div className="main">
        <Switch>
          <Route exact path="/" component={PosesPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/mysequences" component={MySequencesPage} />
          <Route 
                    path="/mysequences/:id" 
                    render={ (routerProps) => {
                        return (<SequenceDetail {...routerProps} />)
                    }} /> 
          <Route exact path="/poses" component={PosesPage} />
          <Route 
                    path="/poses/:id" 
                    render={ (routerProps) => {
                        return (<PoseDetail {...routerProps} />)
                    }} />
          <Route render={ErrorPage} />
        </Switch>
      </div>
      </div>
    )
  }
}

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchingPoses: () => {dispatch( fetchingPoses() )},
      fetchingSequences: () => {dispatch( fetchingSequences() )}
    }

  }
  // laundering in this function of fetchPoses to props
  // when this prop function is invoked, it will dispatch
  // the dispatch is the invoking of fetching poses function


export default withRouter(connect(null, mapDispatchToProps)(App))
