import { createHashHistory } from 'history'
const history = createHashHistory()
const SET_REGISTER_PENDING = 'SET_REGISTER_PENDING'
const SET_REGISTER_SUCCESS = 'SET_REGISTER_SUCCESS'
const SET_REGISTER_ERROR = 'SET_REGISTER_ERROR'
export function register (data) {
  return dispatch => {
    dispatch(setRegisterPending(true))
    dispatch(setRegisterSuccess(false))
    dispatch(setRegisterError(null))

    callRegisterApi(data, error => {
      dispatch(setRegisterPending(false))
      if (!error) {
        dispatch(setRegisterSuccess(true))
      } else {
        dispatch(setRegisterError(error))
      }
    })
  }
}

function setRegisterPending (isRegisterPending) {
  return {
    type: SET_REGISTER_PENDING,
    isRegisterPending
  }
}

function setRegisterSuccess (isRegisterSuccess) {
  return {
    type: SET_REGISTER_SUCCESS,
    isRegisterSuccess
  }
}

function setRegisterError (RegisterError) {
  return {
    type: SET_REGISTER_ERROR,
    RegisterError
  }
}

function callRegisterApi (data, callback) {
  setTimeout(() => {
    if (data) {

      history.push('/')
      return callback(null)
    } else {
      return callback(new Error('Invalid email and password'))
    }
  }, 10000)
}
