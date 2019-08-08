import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

import { Link, withRouter } from 'react-router-dom'
/*import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
*/
class Question extends Component {

  toQuestion = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/question/${id}`)
  }
  render() {
    const { question } = this.props
    const {
        name, avatar, optionOne, optionTwo, id
    } = question

    return (
        <div className='tweet'>
            <img 
                src={avatar}
                alt={`Avatar of ${name}`}
                className='avatar'
            />
            <div className='tweet-indo'>
              <span>{name}</span>
              <div>Would you rather...</div>
              <div>
                <p>
                {optionOne.text}
                </p>
                <p>
                  {optionTwo.text}
                </p>
                <button className='btn' onClick={(e) => this.toQuestion(e, question.id)}>
                Answer the question
                </button>
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

