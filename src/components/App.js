import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import {LoadingBar} from 'react-redux-loading-bar'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import ResultPage from './ResultPage'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    const loguser = this.props.user || null
    this.props.dispatch(handleInitialData(loguser))
  }
  render() {
    
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {console.log('app ',  this.props.user)}
            {this.props.user === null
              ? <div> 
                  <Route path='/' component={Login} /> 
                  <Redirect to="/login"/>
                </div>
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/question/:id' component={QuestionPage} />
                  <Route path='/results/:id' component={ResultPage} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leader' component={LeaderBoard} />
                </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

  function mapStateToProps ({ authedUser }) {
    return {
      user: authedUser
    }
  }

export default connect(mapStateToProps)(App)
