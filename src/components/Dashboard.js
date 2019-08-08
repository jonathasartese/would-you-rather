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
        <ul className='dashboard-list'>
          {this.props.questionIds.map((id) => (
            <li key={id}>
            {this.state.toQuestion === true
              ? <Question id={id} />
              : <Result id={id} /> 
            }
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ users, questions }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
