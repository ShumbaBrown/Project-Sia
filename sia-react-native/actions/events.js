import Backend from '../Backend.js'

// define types
export const GET_EVENTS = 'GET_EVENTS'

// actions
export const getEvents = () => {
  	return async (dispatch, getState) => {
  		try {
  			let backend = new Backend;
  			backend.getEvents().then(events => {
  				dispatch(setEvents(events))
  			})
  		} catch (error) {
  			console.log(error)
  		}
  	}
  }

export function setEvents(events) {
  	return async (dispatch, getState) => {
  		try {
  			dispatch({ type: GET_EVENTS, payload: events})
  		} catch (e) {
  			alert(e)
  		}
  	}
  }
