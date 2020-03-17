import Backend from '../Backend.js'

// define types
export const GET_USER = 'GET_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME'
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME'
export const UPDATE_AGE = 'UPDATE_AGE'
export const UPDATE_GENDER = 'UPDATE_GENDER'
export const UPDATE_CLASSIFICATION = 'UPDATE_CLASSIFICATION'
export const UPDATE_MAJOR = 'UPDATE_MAJOR'
export const UPDATE_INTEREST_TAGS = 'UPDATE_INTEREST_TAGS'

// actions
export const updateFirstName = first_name => {
	return {
		type: UPDATE_FIRST_NAME,
		payload: first_name
	}
}

export const updateLastName = last_name => {
	return {
		type: UPDATE_LAST_NAME,
		payload: last_name
	}
}

export const updateAge = age => {
	return {
		type: UPDATE_AGE,
		payload: age
	}
}

export const updateGender = gender => {
	return {
		type: UPDATE_GENDER,
		payload: gender
	}
}

export const updateClassification = classification => {
	return {
		type: UPDATE_CLASSIFICATION,
		payload: classification
	}
}

export const updateMajor = major => {
	return {
		type: UPDATE_MAJOR,
		payload: major
	}
}

export const updateInterestTags = tags => {
	return {
		type: UPDATE_INTEREST_TAGS,
		payload: tags
	}
}

export const updateUser = (user) => {
	return async (dispatch, getState) => {
		try {
			let backend = new Backend;
			backend.updateUser(user).then( () => {
				dispatch({ type: UPDATE_USER, payload: user})
			})
		} catch (error) {
			console.log(error)
		}
	}
}

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
