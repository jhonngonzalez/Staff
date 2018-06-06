import { createReducer, createActions, createTypes } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Action Creators ------------- */

const {Types, Creators} = createActions({
	signUpRequest: ['datauser'],
	signUpSuccess: ['response'],
	signUpFailure: ['error']
}, {})


/* ------------- Types Creators ------------- */

// const Types = createTypes(`
//   SIGNUP_REQUEST
//   SIGNUP_SUCCESS
//   SIGNUP_FAILURE`,
// {})


/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
	signUpResults: [],
	signUpSuccessResults: [],
	signUpFailureResults: []
})

/* ------------- Reducers ------------- */

export const signUpRequest = function(state, data) {
	console.log('signUpRequest', data)
	return state.merge({ signUpResults: data.datauser})
}

export const signUpSuccess = function(state, actionResults){
	console.log('signUpRequestSUCCESS', actionResults)
	return state.merge({signUpSuccessResults: false, error: null, user: actionResults})
}

export const signUpFailure = function(state, error) {
	console.log('signUpRequestFailure', error)
	return state.merge({signUpFailureResults: false, error: error, user: null})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_UP_REQUEST]: signUpRequest,
  [Types.SIGN_UP_SUCCESS]: signUpSuccess,
  [Types.SIGN_UP_FAILURE]: signUpFailure
})

export const AuthTypes = Types
export default Creators
