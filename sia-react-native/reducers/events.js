import { combineReducers } from 'redux'
import { GET_EVENTS } from '../actions/events'

const initialState = {}

export default function events(state = {}, action) {
    if (typeof state === 'undefined') {
      return initialState
    }
    switch (action.type) {
        case GET_EVENTS:
            return action.payload
        default:
            return state
    }
}
