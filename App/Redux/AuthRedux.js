import { createReducer, createActions, createTypes } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Action Creators ------------- */

const Creators = createActions({
	singupRequest: ['datauser'],
	singupSuccess: ['user'],
	singupFailure: null
})

export default Creators

/* ------------- Types Creators ------------- */

const Types = createTypes(`
  SIGNUP_REQUEST
  SIGNUP_SUCCESS
  SIGNUP_FAILURE`,
{})

export const AuthTypes = Types

/* ------------- Initial State ------------- */

export const SINGUP_STATE = Immutable({
	signingup: null,
	datauser: {},
	error: null,
	user: null
})

/* ------------- Reducers ------------- */

export const signUpRequest = function(state, { data }) {
	datauser = data
	state.merge({ signingup: true, datauser})
}

export const signUpSuccess = function(state, action){
	return state.merge({signingup: false, error: null, user: action})
}

export const signUpFailure = function(state) {
	state.merge({signingup: false, error: true, user: null})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(SINGUP_STATE, {
  [Types.SIGNUP_REQUEST]: signUpRequest,
  [Types.SIGNUP_SUCCESS]: signUpSuccess,
  [Types.SIGNUP_FAILURE]: signUpFailure
})
