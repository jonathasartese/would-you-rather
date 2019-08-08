import React, { Component } from 'react'
import { connect } from 'react-redux'


class User extends Component {
  render() {
    const { user } = this.props
    const {
        name, avatarURL, answers, questions
    } = user

    const answeredtotal = Object.keys(answers).length
    const createdtotal = Object.keys(questions).length
    const score = answeredtotal + createdtotal
    return (
        <div className='tweet'>
            <img 
                src={avatarURL}
                alt={`Avatar of ${name}`}
                className='avatar'
            />
            <div className='tweet-indo'>
              <h3>{name}</h3>
              <div>
                <p> Answered questions : {answeredtotal}</p>
                <p> Created questions  : {createdtotal}</p>
                <p> Score : {score}</p>
              </div>
            </div>
        </div>
    )
  }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const user = users[id]
  return {
    authedUser,
    user: user
  }
}
export default connect(mapStateToProps)(User)

