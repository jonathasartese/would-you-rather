import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'


class LeaderBoard extends Component {
  render() {
    const { usersIds, users , questions} = this.props
    console.log(users)
    console.log(questions)
    return (
      <div>
        <h3 className='center'>LeaderBoard</h3>
        <ul className='dashboard-list'>
          {usersIds.map((id) => (
            <li key={id}>
                <User id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ users , questions }) {
  return {
    usersIds: Object.keys(users)
      .sort((a,b) => (
        Object.keys(users[b].answers).length + Object.keys(users[b].questions).length) 
          - (Object.keys(users[a].answers).length + Object.keys(users[a].questions).length)
          ),
    users: users,
    questions: questions
  }
  
}

export default connect(mapStateToProps)(LeaderBoard)