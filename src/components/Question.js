import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
/*import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { handleToggleTweet } from '../actions/tweets'
import { Link, withRouter } from 'react-router-dom'
*/
class Question extends Component {
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
export default connect(mapStateToProps)(Question)