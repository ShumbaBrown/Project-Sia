import { combineReducers } from 'redux'
<<<<<<< HEAD
import { GET_USER,
  UPDATE_USER,
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
  UPDATE_AGE,
  UPDATE_GENDER,
  UPDATE_CLASSIFICATION,
  UPDATE_MAJOR,
  UPDATE_INTEREST_TAGS } from '../actions/user'
=======
import { GET_USER } from '../actions/user'
>>>>>>> Adding support for user in state

export default function user(state = {}, action) {
    switch (action.type) {
        case GET_USER:
            return action.payload
<<<<<<< HEAD
        case UPDATE_USER:
            return action.payload
        case UPDATE_FIRST_NAME:
            return { ...state, first_name: action.payload }
        case UPDATE_LAST_NAME:
            return { ...state, last_name: action.payload }
        case UPDATE_AGE:
            return { ...state, age: action.payload }
        case UPDATE_GENDER:
            return { ...state, gender: action.payload }
        case UPDATE_CLASSIFICATION:
            return { ...state, classification: action.payload }
        case UPDATE_MAJOR:
            return { ...state, major: action.payload }
        case UPDATE_INTEREST_TAGS:
            return { ...state, interest_tags: action.payload }
=======
>>>>>>> Adding support for user in state
        default:
            return state
    }
}
