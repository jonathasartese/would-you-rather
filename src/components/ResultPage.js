import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion} from '../actions/questions'
import { formatQuestion } from '../utils/helpers'
import { Redirect } from 'react-router-dom'



class ResultPage extends Component {
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
                <div className='tweet-indo'>
                  <span>{name}</span>
                  <div>Would you rather...</div>
                  <div>
                    <p>
                      {optionOne.text} - 
                      {optionOne.votes.length}
                    </p>
                    <p>
                      {optionTwo.text} - 
                      {optionTwo.votes.length}
                    </p>
                  </div>
                </div>
            </div>
        )
      }
    }
    
    function mapStateToProps ({authedUser, users, questions}, props) {
      const { id } = props.match.params
      const question = questions[id]
      
      return {
        authedUser,
        question: question
          ? formatQuestion(question, users[question.author], authedUser)
          : null
      }
    }
    export default connect(mapStateToProps)(ResultPage)
    