import Backend from '../Backend.js'

// define types
export const GET_USER = 'GET_USER'

// actions
export const getUser = () => {
	return async (dispatch, getState) => {
		try {
			let backend = new Backend;
			backend.getCurrentUser().then(user => {
				dispatch(setUser(user))
			})
		} catch (error) {
			console.log(error)
		}
	}
}

export function setUser(user) {
  // return {type: GET_USER, payload: user};
	return async (dispatch, getState) => {
		try {
			dispatch({ type: GET_USER, payload: user})
		} catch (e) {
			alert(e)
		}
	}
}
