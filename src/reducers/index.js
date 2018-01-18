import { combineReducers } from 'redux'
import login from './login'
import register from './register'

export default combineReducers({
  login,
  register
  // More reducers if there are
  // can go here
})
