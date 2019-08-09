import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { ProgressBar } from 'react-bootstrap';




class ResultPage extends Component {
      render() {
        const { question } = this.props
        const {
            name, avatar, optionOne, optionTwo 
        } = question

        const total = optionOne.votes.length + optionTwo.votes.length
        const progop1 = Math.round((optionOne.votes.length/total)*100)
        const progop2 = Math.round((optionTwo.votes.length/total)*100)

        return (
            <div className='tweet'>
                <img 
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                <div className='tweet-indo'>
                  <h2 className='center'>Results:</h2>
                  <div>
                    <h4>Would you rather be {optionOne.text} ? </h4>
                    <div> 
                    <ProgressBar now={progop1} label={`${progop1}%`} />
                    </div>
                  </div>
                  <div>
                    <h4> Would you rather be {optionTwo.text} ? </h4>
                    <div> 
                    <ProgressBar now={progop2} label={`${progop2}%`}/>
                    </div>
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
    