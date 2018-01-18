const SET_REGISTER_PENDING = 'SET_REGISTER_PENDING'
const SET_REGISTER_SUCCESS = 'SET_REGISTER_SUCCESS'
const SET_REGISTER_ERROR = 'SET_REGISTER_ERROR'

export default function register (
    state = {
      isRegisterSuccess: false,
      isRegisterPending: false,
      RegisterError: null
    },
    action
) {
  switch (action.type) {
    case SET_REGISTER_PENDING:
      return Object.assign({}, state, {
        isRegisterPending: action.isRegisterPending
      })

    case SET_REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isRegisterSuccess: action.isRegisterSuccess
      })

    case SET_REGISTER_ERROR:
      return Object.assign({}, state, {
        RegisterError: action.RegisterError
      })

    default:
      return state
  }
}
