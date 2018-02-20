import { createHashHistory } from 'history'
const history = createHashHistory()
const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING'
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS'
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR'
export function login (email, password, remember) {
  return dispatch => {
    dispatch(setLoginPending(true))
    dispatch(setLoginSuccess(false))
    dispatch(setLoginError(null))

    callLoginApi(email, password, remember, error => {
      dispatch(setLoginPending(false))
      if (!error) {
        dispatch(setLoginSuccess(true))
      } else {
        dispatch(setLoginError(error))
      }
    })
  }
}

function setLoginPending (isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  }
}

function setLoginSuccess (isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  }
}

function setLoginError (loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  }
}

function callLoginApi (email, password, remember, callback) {
  setTimeout(() => {
    if (email === 'heriyadi@kudo.co.id' && password === '12345678') {
      history.push('/')
      return callback(null)
    } else {
      return callback(new Error('Invalid email and password'))
    }
  }, 1000)
}
