export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const SET_LOGOUT = 'SET_LOGOUT'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id: id,
  }
}

export function handlesetAuthedUser (info) {
  return (dispatch) => {
    dispatch(setAuthedUser(info.authedUser))
  }
}

export function Logout () {
  return {
    type: SET_LOGOUT,
  }
}
