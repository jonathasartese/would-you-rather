import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {
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
        {console.log('ligon', this.props.user)}
        {this.props.user === null
          ?
          <NavLink to='/login' activeClassName='active'>
          Login
          </NavLink>
          : 
          <NavLink to='/login' activeClassName='active'>
            Logout
          </NavLink>
        }
        </li>
      </ul>
    </nav>
  )

  }
}

function mapStateToProps ({ authedUser }) {
  return {
    user: authedUser
  }
}

export default connect()(Nav)
