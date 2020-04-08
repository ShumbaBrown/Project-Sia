import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'

const reducer = combineReducers({
    auth,
    user
})

export default reducer
