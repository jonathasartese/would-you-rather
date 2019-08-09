import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import ResultPage from './ResultPage';
import Result from './Result';
import { Nav } from 'react-bootstrap'

class Dashboard extends Component {
  state ={
    toQuestion: true,
  }
  handletoQuestion = (e) => {

    this.setState(() => ({
      toQuestion: true,
    }))
  }

  handletoAnswer = (e) => {

    this.setState(() => ({
      toQuestion: false,

    }))

  }

  render() {
    return (
      <div className='center'>
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link onClick={(e) => this.handletoQuestion(e)}>Unanswered Questions</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={(e) => this.handletoAnswer(e)} >Answered Questions</Nav.Link>
          </Nav.Item>
        </Nav>
        {this.state.toQuestion === true
        ?
        <ul className='dashboard-list'>
          {this.props.questionsUnansweredIds.map((id) => (
            <li key={id}>
            <Question id={id} />
            </li>
          ))}
        </ul>
        : 
          <ul className='dashboard-list'>
          {this.props.questionsAnsweredIds.map((id) => (
            <li key={id}>
            <Result id={id} /> 
            </li>
            ))}
          </ul>
        }
      </div>
    )
  }
}

function mapStateToProps ({ users, questions , authedUser}) {
  return {
    questionsUnansweredIds: Object.keys(questions) 
    .filter((id) => !questions[id].optionOne.votes.includes(authedUser) 
    && !questions[id].optionTwo.votes.includes(authedUser))
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp),

    questionsAnsweredIds: Object.keys(questions) 
    .filter((id) => questions[id].optionOne.votes.includes(authedUser) 
    || questions[id].optionTwo.votes.includes(authedUser))
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
  }
}

export default connect(mapStateToProps)(Dashboard)
