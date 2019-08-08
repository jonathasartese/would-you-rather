import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import {Button} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'


class Question extends Component {

  toQuestion = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/question/${id}`)
  }
  render() {
    const { question } = this.props
    const {
        name, avatar, optionOne, optionTwo
    } = question

    return (
        <div className='tweet'>
            <img 
                src={avatar}
                alt={`Avatar of ${name}`}
                className='avatar'
            />
            <div className='tweet-info'>
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
                View poll
                </Button>
              </div>
            </div>
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
export default withRouter(connect(mapStateToProps)(Question))

