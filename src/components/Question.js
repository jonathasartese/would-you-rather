import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
/*import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { handleToggleTweet } from '../actions/tweets'
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
    alert('Escolhido: ' + this.state.choose);
    e.preventDefault();
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
                    value={optionOne.text} 
                    checked={this.state.choose === optionOne.text} 
                    onChange={this.handleInputChange}/>
                  {optionOne.text}
                </p>
                <p>
                  <input 
                    type='radio' 
                    value={optionTwo.text}  
                    checked={this.state.choose === optionTwo.text}
                    onChange={this.handleInputChange}/>
                  {optionTwo.text}
                </p>
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