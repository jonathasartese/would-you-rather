import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Button , Row , Col} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'


class Result extends Component {

  toQuestion = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/results/${id}`)
  }
  render() {
    const { question } = this.props
    const {
        name, avatar, optionOne, optionTwo
    } = question

    return (
        <div className='tweet'>
          <Row >
            <Col >
              <img 
                  src={avatar}
                  alt={`Avatar of ${name}`}
                  className='avatar'
              />
              </Col>
              <Col className='tweet-info'>
                <h2 className='center'>{name} asks:</h2>
                <h3>Would you rather...</h3>
                <div>
                  <p>
                  -> {optionOne.text}
                  </p>
                  <p>  or </p>
                  <p>
                  -> {optionTwo.text}
                  </p>
                  <Button className='btn' onClick={(e) => this.toQuestion(e, question.id)}>
                  View Answer
                  </Button>
                </div>
            </Col>
            </Row>
        </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id]
  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author], authedUser)
      : null
  }
}
export default withRouter(connect(mapStateToProps)(Result))