import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'


class LeaderBoard extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>LeaderBoard</h3>
        <ul className='dashboard-list'>
          {this.props.usersIds.map((id) => (
            <li key={id}>
                <User id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    usersIds: Object.keys(users)
      .sort((a,b) => (
          users[b].answers.lenght + users[b].questions.lenght) 
          - (users[a].answers.lenght + users[a].questions.lenght))
  }
  
}

export default connect(mapStateToProps)(LeaderBoard)