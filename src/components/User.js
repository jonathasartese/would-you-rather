import React, { Component } from 'react'
import { connect } from 'react-redux'


class User extends Component {
  render() {
    const { user } = this.props
    const {
        name, avatarURL, answers, questions, id
    } = user

    return (
        <div className='tweet'>
            <img 
                src={avatarURL}
                alt={`Avatar of ${name}`}
                className='avatar'
            />
            <div className='tweet-indo'>
              <span>{name}</span>
              <div>
                <p>
                  {console.log(answers)}
                </p>
                <p>
                  {console.log(questions)}
                </p>
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

