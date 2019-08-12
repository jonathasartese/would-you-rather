import { SET_AUTHED_USER, SET_LOGOUT } from '../actions/authedUser'

export default function authedUser (state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER :
      return action.id
    case SET_LOGOUT :
      return null
    default :
      return state
  }
}