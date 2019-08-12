import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Logout } from './../actions/authedUser'

class Nav extends Component {

  handlelogout = (e) => {
    e.preventDefault();
    const {dispatch  } = this.props
    dispatch(Logout())

  }
  render() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leader' activeClassName='active'>
            Leader Board
          </NavLink>
        </li>
        <li>
        {console.log('login', this.props.user)}
        {this.props.authedUser === null
          ?
          <NavLink to='/login' activeClassName='active'>
            Login
          </NavLink>
          : 
          <div>
            <img 
              src={this.props.user.avatarURL}
              alt={`Avatar of ${this.props.user.name}`}
              className='avatar-login'
            />
            <NavLink to='/login' onClick={this.handlelogout}>
              Logout
            </NavLink>
          </div>
        }
        </li>
      </ul>
    </nav>
  )

  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser: authedUser, 
    user: users[authedUser]
  }
}

export default connect(mapStateToProps)(Nav)
