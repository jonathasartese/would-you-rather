import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { handleAnswerQuestion} from '../actions/questions'
/*import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { Link, withRouter } from 'react-router-dom'
*/
class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choose: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (e) => {
    this.setState({
      choose: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {dispatch , question , authedUser} = this.props
    const answer = this.state.choose

    dispatch(handleAnswerQuestion({
      authedUser: authedUser,
      qid: question.id,
      answer: answer
    }))
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
            <div className='tweet-indo'>
              <span>{name}</span>
              <div>Would you rather...</div>
              <div>
                <p>
                  <input 
                    type='radio' 
                    value="optionOne" 
                    checked={this.state.choose === "optionOne"} 
                    onChange={this.handleInputChange}/>
                  {optionOne.text}
                </p>
                <h3>{optionOne.votes.length}</h3>
                <p>
                  <input 
                    type='radio' 
                    value="optionTwo"
                    checked={this.state.choose === "optionTwo"}
                    onChange={this.handleInputChange}/>
                  {optionTwo.text}
                </p>
                <h3>{optionTwo.votes.length}</h3>
              </div>
              <button type='submit' onClick={this.handleSubmit}>VOTE</button>
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
export default connect(mapStateToProps)(Question)